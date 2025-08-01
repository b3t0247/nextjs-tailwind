import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages, getTranslations } from "next-intl/server";
import { geistMono, geistSans } from "@/app/layout";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { Providers } from "@/components/Providers";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const t = await getTranslations({ locale: resolvedParams.locale });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the imcoming `locale` is valid
  const { locale } = await Promise.resolve(params);
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers locale={locale} messages={messages}>
          {children}
          <LanguageSwitcher />
        </Providers>
      </body>
    </html>
  );
}
