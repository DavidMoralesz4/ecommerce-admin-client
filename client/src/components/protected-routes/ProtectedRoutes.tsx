'use client'

import Home from "@/app/page";
import { RootState } from "@/features/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProtectedRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticate);
  const route = useRouter();

    useEffect(() => {
    if (!isAuth) {
      route.push("/login");
    }
  }, [isAuth, route]);

  return isAuth ? <>{children}</> : <Home/>;
}
