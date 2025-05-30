// import { TextLink } from "~/components/nav/text-link";
import CircularImage from "~/components/ui/circular-image";
import { ContentSection } from "~/components/ui/content-section";
// import { ResponsiveImage } from "~/components/ui/responsive-image";
import naomi from "../../../public/assets/images/naomi.jpeg";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <ContentSection title="House of Shakti">
      <div className="font-main mx-auto max-w-3xl">
        <p>
          {" "}
          {t.rich("welcomeMessage", {
            b: (chunks) => <b>{chunks}</b>,
          })}
        </p>
      </div>
      <div className="mb-8 flex w-full items-center justify-center">
        <CircularImage alt="Naomi's hoofd" src={naomi.src} size={200} />
      </div>
    </ContentSection>
  );
}
