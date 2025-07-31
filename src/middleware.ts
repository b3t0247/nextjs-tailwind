import createMiddleware from "next-intl/middleware";
import { locales } from "@/navigation";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localeDetection: true,
});

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};
