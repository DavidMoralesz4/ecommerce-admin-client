"use client";

import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import authReducer from "../auth/authSlice";
import { productApi } from "../services/productApi";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

/// Configuracion para persistencia
const persistConfig = {
  key: "root", // Esta es la clave unica para el almacenamiento
  storage, // Aqui defino donde se guarda.
  whitelist: ["auth"], // Que slice quiero pque persista!
};

// Aqui creas tu reducer persistente
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    })
      .concat(authApi.middleware)
      .concat(productApi.middleware),
});

/* Este es el persistor, lo usara _app.tsx */
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
