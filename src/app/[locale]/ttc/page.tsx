import { ContentSection } from "~/components/ui/content-section";
import { useTranslations } from "next-intl";

export default function TTCPage() {
  const t = useTranslations("ttc");

  return (
    <ContentSection title={t("title")}>
      <div className="mx-auto max-w-3xl font-main">
        <p className="mb-4 text-left">{t("text")}</p>
      </div>
    </ContentSection>
  );
}
