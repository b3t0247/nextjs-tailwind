type Locale = "en" | "es" | "fr";
const messages: Record<Locale, string> = {
  en: "Welcome",
  es: "Bienvenido",
  fr: "Bienvenue",
};

export default async function HomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await Promise.resolve(params);

  return <h1>{messages[locale]}</h1>;
}
