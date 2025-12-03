import { Link } from "~/i18n/navigation";

export const NavLink = ({
  href,
  title,
  closeMenu,
}: {
  href: string;
  title: string;
  closeMenu: () => void;
}) => {
  function handleClick() {
    closeMenu();
  }

  return (
    <Link href={href} className="w-full">
      <div className="text-gold hover:text-onyx w-full border-collapse cursor-pointer border-t border-dotted py-4 text-center font-headers text-[1.1rem] tracking-[0.1rem] no-underline hover:bg-opacity-90 hover:text-opacity-70">
        <button onClick={handleClick}>{title}</button>
      </div>
    </Link>
  );
};
