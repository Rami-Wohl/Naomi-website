// import { TextLink } from "~/components/nav/text-link";
import { useTranslations } from "next-intl";
import { ContentSection } from "~/components/ui/content-section";
// import { ResponsiveImage } from "~/components/ui/responsive-image";

export default function HomePage() {
  const t = useTranslations("about");

  return (
    <div className="flex h-screen w-screen flex-col items-center text-base lg:text-lg">
      <ContentSection title={t("title")}>
        <div className="font-main mx-auto max-w-3xl">
          <p className="mb-4 text-left">{t("p1")}</p>
          <p className="mb-4 text-left">{t("p2")}</p>
          <p className="mb-4 text-left">{t("p3")}</p>
          <p className="mb-4 text-left">{t("p4")}</p>
          <p className="mb-4 text-left">{t("p5")}</p>
          <p className="mb-4 text-left">{t("p6")}</p>
          <p className="mb-4 text-left">{t("p7")}</p>
          <p className="mb-4 text-left">{t("p8")}</p>
          <p className="mb-4 text-left">{t("p9")}</p>
          <p className="mb-4 text-left">{t("p10")}</p>
          <p className="mb-4 text-left">{t("p11")}</p>
        </div>
      </ContentSection>
    </div>
  );
}
