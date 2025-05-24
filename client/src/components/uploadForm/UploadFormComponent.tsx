"use client";
import { useUploadProductsMutation } from "@/features/services/productApi";
import React from "react";
import { useForm } from "react-hook-form";
import { IoIosWarning } from "react-icons/io";
import { toast } from "sonner";

export default function UploadFormComponent({
  onClose,
}: {
  onClose: () => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();
  const [uploadCSV, { isLoading }] = useUploadProductsMutation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("csvFile", data.files[0]);

    try {
      const response = await uploadCSV(formData).unwrap();
      toast.success(response.message);
      reset();
      onClose();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.data.message);
      console.error(err.data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="font-bold text-[26px] md:text-[32px] mb-5">
          Subir archivo .CSV
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="">Carga tu CSV de productos</label>
          <input
            type="file"
            accept=".csv"
            className="bg-[#D9D9D9] rounded-[5px] text-black px-2"
            {...register("files")}
          />
        </div>
        <div className="bg-[#220c00] text-[#C74601] flex flex-col items-center p-4 gap-3 mt-6 rounded-lg">
          <IoIosWarning />
          <div className="flex flex-col justify-center items-center">
            <p>Debes respentar las propiedades del producto</p>
            <p>
              nombre, urlImagen, descripcion, unidades, precio, marca,
              categoria, color
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a className="text-center hover:text-blue-400" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/16mmWTTrK-ArScrYfDkXi1rUAUnr2rTvdnxq5z2opJds/edit?gid=0#gid=0">
            Descarga el documento de prueba
          </a>
        </div>
        <div className="flex justify-center items-center mt-5">
          <button
            type="submit"
            disabled={isLoading || isSubmitting}
            className={`group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-[#C74601] bg-[#5B2600] hover:text-[#f8d0af] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
              isLoading || isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading || isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Procesando...
              </>
            ) : (
              "Crear producto"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
