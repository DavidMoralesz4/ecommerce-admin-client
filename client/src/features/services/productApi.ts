import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://ecommerce-admin-server-production.up.railway.app/api";

export interface Brand {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Colors {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  stock: string;
  price: string;
  brand: Brand;
  category: Category;
  colors: Colors[];
}

interface DataResponse {
  success: boolean;
  message: string;
  data?: Product[];
}

interface DataResponseString {
  success: boolean;
  message: string;
}

export interface CredentialsRequestProducts {
  name: string;
  image: string;
  description: string;
  stock: number;
  price: number;
  colors: Colors[];
  brand: Brand;
  category: Category;
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
      // Si necesitas añadir headers adicionales
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<DataResponse, void>({
      query: () => {
        return {
          url: "/products",
          credentials: "include",
        };
      },
    }),
    uploadProducts: builder.mutation<DataResponseString, FormData>({
      query: (formData) => {
        return {
          url: '/upload',
          method: "POST",
          credentials: "include",
          body: formData
        }
      }
    }),
    createProducts: builder.mutation<DataResponse, CredentialsRequestProducts>({
      query: (credentials) => {
        return {
          url: "/products",
          body: credentials,
          credentials: "include",
          method: "POST",
        };
      },
    }),
    getCategories: builder.query<{ data: Category[] }, void>({
      query: () => {
        return {
          url: "/categories",
          credentials: "include",
        };
      },
    }),
    getBrands: builder.query<{ data: Brand[] }, void>({
      query: () => {
        return {
          url: "/brand",
          credentials: "include",
        };
      },
    }),
    getColors: builder.query<{ data: Colors[] }, void>({
      query: () => {
        return {
          url: "/colors",
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductsMutation,
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetColorsQuery,
  useUploadProductsMutation
} = productApi;
