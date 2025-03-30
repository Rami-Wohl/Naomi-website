// import { TextLink } from "~/components/nav/text-link";
import { ContentSection } from "~/components/ui/content-section";
// import { ResponsiveImage } from "~/components/ui/responsive-image";

export default function HomePage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center text-base lg:text-lg">
      <ContentSection title="Over Naomi Kundalini Panini">
        <div className="mx-auto max-w-3xl p-6">
          <h1 className="mb-4 text-3xl font-bold">Wat is Kundalini?</h1>
          <p className="mb-4 text-left">
            Kundalini is een krachtige spirituele energie die in ieder mens
            sluimert. Volgens oude yogatradities bevindt deze energie zich aan
            de basis van de ruggengraat, vaak voorgesteld als een opgerolde
            slang die in diepe rust verkeert. Wanneer Kundalini ontwaakt, stijgt
            deze energie op langs de wervelkolom en opent ze de verschillende
            energiecentra in het lichaam, ook wel chakra’s genoemd. Dit proces
            kan leiden tot diepe spirituele inzichten, een gevoel van
            verbondenheid en innerlijke transformatie.
          </p>

          <h2 className="mb-4 mt-6 text-2xl font-semibold">
            De oorsprong van Kundalini
          </h2>
          <p className="mb-4 text-left">
            De kennis over Kundalini komt voort uit de eeuwenoude yogatradities
            van India, met name uit het tantrische en vedische gedachtegoed. In
            oude geschriften zoals de Upanishads en de Yoga Sutra’s wordt
            Kundalini beschreven als een bron van spiritueel ontwaken en
            verlichting.
          </p>

          <h2 className="mb-4 mt-6 text-2xl font-semibold">
            Hoe werkt Kundalini?
          </h2>
          <p className="mb-4 text-left">
            Kundalini wordt vaak gezien als een kracht die door de zeven
            belangrijkste chakra’s beweegt. Elk chakra vertegenwoordigt een
            ander aspect van het bewustzijn en ons fysieke, emotionele en
            spirituele welzijn.
          </p>

          <h2 className="mb-4 mt-6 text-2xl font-semibold">
            De voordelen van een Kundalini ontwaken
          </h2>
          <ul className="mb-4 list-inside list-disc text-left">
            <li>
              <strong>Meer energie en vitaliteit</strong>
            </li>
            <li>
              <strong>Diepere intuïtie en spiritueel inzicht</strong>
            </li>
            <li>
              <strong>Verhoogde creativiteit en inspiratie</strong>
            </li>
            <li>
              <strong>Meer innerlijke rust en emotionele balans</strong>
            </li>
            <li>
              <strong>
                Een diep gevoel van verbondenheid met het universum
              </strong>
            </li>
          </ul>

          <h2 className="mb-4 mt-6 text-2xl font-semibold">
            Hoe kun je Kundalini activeren?
          </h2>
          <ul className="mb-4 list-inside list-disc text-left">
            <li>
              <strong>Yoga en ademhalingstechnieken</strong> – Kundalini yoga is
              speciaal ontworpen om deze energie op een veilige manier te
              activeren.
            </li>
            <li>
              <strong>Meditatie</strong> – Door diepe concentratie en bewustzijn
              kan de energie langzaam gewekt worden.
            </li>
            <li>
              <strong>Mantra’s en klanken</strong> – Specifieke geluiden en
              mantra’s kunnen helpen bij het openen van chakra’s en het
              stimuleren van de energie.
            </li>
            <li>
              <strong>Levensstijl en voeding</strong> – Een bewuste levensstijl
              en gezonde voeding kunnen bijdragen aan een soepel energieverloop
              in het lichaam.
            </li>
          </ul>

          <h2 className="mb-4 mt-6 text-2xl font-semibold">
            Is Kundalini gevaarlijk?
          </h2>
          <p className="mb-4 text-left">
            Een spontane of te snelle activering van Kundalini kan overweldigend
            zijn en soms leiden tot lichamelijke of emotionele ongemakken, zoals
            hoofdpijn, vermoeidheid, of intense emoties. Daarom wordt aangeraden
            om onder begeleiding van een ervaren leraar te werken en goed naar
            je eigen lichaam en geest te luisteren.
          </p>

          <h2 className="mb-4 mt-6 text-2xl font-semibold">Conclusie</h2>
          <p>
            Kundalini is een krachtige en transformerende energie die kan leiden
            tot een dieper begrip van jezelf en de wereld om je heen. Het is
            geen ‘quick fix’, maar eerder een pad van groei en bewustwording.
          </p>
        </div>
      </ContentSection>
    </div>
  );
}
