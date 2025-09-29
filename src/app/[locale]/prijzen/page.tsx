import { ContentSection } from "~/components/ui/content-section";
import { useTranslations } from "next-intl";

const PriceRow = ({ service, price }: { service: string; price: string }) => {
  return (
    <div className="grid grid-cols-2 gap-4 border-t border-white border-opacity-30 px-4 py-2 first:border-none">
      <span className="text-sm md:text-base">{service}</span>
      <span className="flex flex-col justify-end text-xs md:text-sm">
        {price}
      </span>
    </div>
  );
};

const Separator = () => {
  return (
    <div
      className={
        "my-6 h-[1px] w-full shrink-0 bg-neutral-200 dark:bg-neutral-800"
      }
    />
  );
};

export default function PricesPage() {
  const t = useTranslations("prices");

  return (
    <ContentSection title={t("title")}>
      <div className="mx-auto max-w-3xl font-main">
        <div className="w-full">
          <Separator />
          <p className="mb-6 mt-4 pl-2">{t("text")}</p>

          <div className="mx-2 flex flex-col rounded-lg bg-white bg-opacity-10">
            <PriceRow service={t("text")} price={t("text")} />
            <PriceRow service={t("text")} price={t("text")} />
            <PriceRow service={t("text")} price={t("text")} />
            <PriceRow service={t("text")} price={t("text")} />
            <PriceRow service={t("text")} price={t("text")} />
          </div>
          <span className="mx-2 text-xs">{t("text")}</span>

          <h2 className="mb-6 mt-8 pl-2 text-lg font-semibold">{t("text")}</h2>
          <p className="mb-6 mt-4 pl-2">{t("text")}</p>
          <p className="mb-6 mt-4 pl-2">{t("text")}</p>
        </div>
      </div>
    </ContentSection>
  );
}
