import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   domains: ["tse1.mm.bing.net", "www.somosmamas.com.ar", "cloudinary.com", "imgur.com", "http2.mlstatic.com", "www.uncolor.com.co", "ss402.liverpool.com.mx", ],
  // },
  images: {
    disableStaticImages: true, // ⚠️ Desactiva el componente Image
  },
};

export default nextConfig;
