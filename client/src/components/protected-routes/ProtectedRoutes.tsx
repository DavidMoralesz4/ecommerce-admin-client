import { RootState } from "@/features/store/store";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

export default function ProtectedRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticate);
  const route = useRouter();

  return isAuth ? <div>{children}</div> : route.push("/login");
}
