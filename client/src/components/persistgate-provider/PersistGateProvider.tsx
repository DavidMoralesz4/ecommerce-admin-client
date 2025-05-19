"use client";

import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/features/store/store";

export function PersistGateProvider({ children }: { children: React.ReactNode }) {
  return (
    <PersistGate persistor={persistor} loading={null}>
      {children}
    </PersistGate>
  );
}
