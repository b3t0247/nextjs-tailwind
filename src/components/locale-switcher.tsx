"use client";

import { usePathname, useRouter } from "next/navigation";

const locales = ["en", "es", "fr"];

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (target: string) => {
    const segments = pathname.split("/");
    segments[1] = target; // assumes first segment is locale
    router.push(segments.join("/"));
  };

  return (
    <div className="space-x-4">
      {locales.map((locale) => (
        <button key={locale} onClick={() => switchLocale(locale)}>
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
