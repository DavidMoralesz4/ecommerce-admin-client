import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "sonner";
import { PersistGateProvider } from "@/components/persistgate-provider/PersistGateProvider";
import ProtectedRoutes from "@/components/protected-routes/ProtectedRoutes";

const josefin_Sans = Josefin_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrument_Sans = Instrument_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${josefin_Sans.className} ${instrument_Sans.className} antialiased`}
      >
        <Toaster />
        <Providers>
          <ProtectedRoutes>
            <PersistGateProvider>{children}</PersistGateProvider>
          </ProtectedRoutes>
        </Providers>
      </body>
    </html>
  );
}
