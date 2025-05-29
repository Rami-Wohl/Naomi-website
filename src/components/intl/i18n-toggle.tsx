import { Link } from "~/i18n/navigation";
import FlagNLIcon from "../icons/flag-nl-icon";
import FlagUKIcon from "../icons/flag-uk-icon";
import { type Locale } from "~/i18n/routing";
import useComponentVisible from "~/hooks/use-component-visible";

function getLabel(locale: Locale) {
  switch (locale) {
    case "nl":
      return (
        <FlagNLIcon
          aria-label="Nederlands"
          height={24}
          width={24}
          className="rounded-full border-2 border-solid border-white border-opacity-20 bg-white bg-opacity-20"
        />
      );
    case "en":
      return (
        <FlagUKIcon
          aria-label="English"
          height={24}
          width={24}
          className="rounded-full border-2 border-solid border-white border-opacity-20 bg-white bg-opacity-20"
        />
      );
  }
}

export function I18nToggle({ locale, path }: { locale: Locale; path: string }) {
  const { ref, handlerRef, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <div ref={handlerRef}>
      <button
        onClick={() => setIsComponentVisible(!isComponentVisible)}
        className="flex items-center gap-2 rounded p-2 text-sm"
      >
        {getLabel(locale)}
      </button>
      {isComponentVisible && (
        <div
          ref={ref}
          className="font-main absolute left-2 top-14 mt-2 flex w-40 flex-col rounded border border-gray-300 bg-amber-50 shadow"
        >
          <Link href={path} locale="en">
            <div>
              <div className="mb-2 flex flex-row items-center gap-3 p-1 hover:bg-white hover:text-opacity-100">
                <FlagUKIcon
                  aria-label="English"
                  height={24}
                  width={24}
                  className="rounded-full border-2 border-solid border-white border-opacity-10 bg-white bg-opacity-10"
                />
                <span>English</span>
              </div>
            </div>
          </Link>
          <Link href={path} locale="nl">
            <div className="flex flex-row items-center gap-3 p-1 text-opacity-70 hover:bg-white hover:text-opacity-100">
              <FlagNLIcon
                aria-label="Nederlands"
                height={24}
                width={24}
                className="rounded-full border-2 border-solid border-white border-opacity-10 bg-white bg-opacity-10"
              />
              <span>Nederlands</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
