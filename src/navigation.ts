// import { createNavigation } from "next-intl/navigation";
export const locales = ["en", "es"] as const;

export const pathname = {
  "/": {
    en: "/",
    es: "/",
  },
  "/tailwind-preview": {
    en: "/tailwind-preview",
    es: "/tailwind-preview",
  },
};

export const localePrefix = "always"; // adds locale to all paths
