// import { TextLink } from "~/components/nav/text-link";
import CircularImage from "~/components/ui/circular-image";
import { ContentSection } from "~/components/ui/content-section";
// import { ResponsiveImage } from "~/components/ui/responsive-image";
import naomi from "../../public/assets/images/naomi.jpeg";

export default function HomePage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <ContentSection title="welkom">
        <p>
          Welkom op de website van de <b>Naomi Kundalini Panini</b>. Deze site
          is onder constructie, zoals je ziet. Nog even geduld...
        </p>
        <div className="mb-8 flex w-full items-center justify-center">
          <CircularImage alt="Naomi's hoofd" src={naomi.src} size={200} />
        </div>
      </ContentSection>
    </div>
  );
}
