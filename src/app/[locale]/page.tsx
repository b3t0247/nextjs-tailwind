// import { ModeToggle } from "@/components/theme-toggle";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <p>{t("description")}</p>
    </main>
  );
}
