// import { TextLink } from "~/components/nav/text-link";
import CircularImage from "~/components/ui/circular-image";
import { ContentSection } from "~/components/ui/content-section";
// import { ResponsiveImage } from "~/components/ui/responsive-image";
import naomi from "../../../public/assets/images/naomi.jpeg";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <ContentSection title="">
      <div className="mx-auto max-w-3xl font-main">
        <p>
          {" "}
          {t.rich("welcomeMessage", {
            b: (chunks) => <span className="text-charcoal">{chunks}</span>,
          })}
        </p>
      </div>
      <div className="mb-8 flex w-full items-center justify-center">
        <CircularImage alt="Naomi's hoofd" src={naomi.src} size={200} />
      </div>
    </ContentSection>
  );
}
