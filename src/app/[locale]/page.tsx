import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <Link href="./tailwind-preview">{t("nav.about")}</Link>
      <p>{t("description")}</p>
    </main>
  );
}
