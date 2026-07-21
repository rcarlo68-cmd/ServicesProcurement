import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://www.servicesprocurementpe.com/sitemap.xml",

    host: "https://www.servicesprocurementpe.com",
  };
}