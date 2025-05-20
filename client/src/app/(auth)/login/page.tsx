'use client'

import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
// import Image from "next/image";
import React from "react";

function LoginPage() {
  return (
    <div className="min-h-screen flex bg-gray-950">
      {/* Image section */}
      <div className="hidden lg:flex lg:w-1/2 relative my-5 ml-5">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-indigo-600/5 rounded-3xl shadow-2xl">
          <Image
            src="./WMS4.jpeg" 
            alt="image-section-login" 
            className="w-full h-full object-cover rounded-3xl"
            // height={}
          />
        </div>
      </div>

      {/* Form section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
