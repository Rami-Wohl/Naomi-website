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
          <p className="mb-6 mt-4 pl-2">{t("paragraph1")}</p>

          <div className="mx-2 flex flex-col rounded-lg bg-white bg-opacity-10">
            <PriceRow
              service={t("services.master-regular")}
              price={t("prices.master-regular")}
            />
            <PriceRow
              service={t("services.master-stem")}
              price={t("prices.master-stem")}
            />
            <PriceRow service={t("services.mix")} price={t("prices.mix")} />
            <PriceRow
              service={t("services.writing")}
              price={t("prices.writing")}
            />
            <PriceRow
              service={t("services.ghost-writing")}
              price={t("prices.ghost-writing")}
            />
          </div>
          <span className="mx-2 text-xs">{t("disclaimer")}</span>

          <h2 className="mb-6 mt-8 pl-2 text-lg font-semibold">
            {t("header2")}
          </h2>
          <p className="mb-6 mt-4 pl-2">{t("paragraph2")}</p>
          <p className="mb-6 mt-4 pl-2">{t("paragraph3")}</p>
        </div>
      </div>
    </ContentSection>
  );
}
