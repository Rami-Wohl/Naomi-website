import Link from "next/link";

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
      <div className="w-full border-collapse cursor-pointer border-t border-dotted border-amber-950 py-4 text-center font-sans text-[1.1rem] font-semibold tracking-[0.1rem] text-amber-950 no-underline hover:bg-amber-950 hover:bg-opacity-90 hover:text-white hover:text-opacity-100">
        <button className="uppercase" onClick={handleClick}>
          {title}
        </button>
      </div>
    </Link>
  );
};
