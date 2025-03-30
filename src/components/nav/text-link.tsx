import Link from "next/link";

export function TextLink({ href, title }: { href: string; title: string }) {
  return (
    <Link
      className="text-blue-600 underline-offset-2 hover:text-white"
      href={href}
    >
      {title}
    </Link>
  );
}

export function ExternalLink({ href, title }: { href: string; title: string }) {
  return (
    <Link
      className="text-blue-600 underline-offset-2 hover:text-white"
      href={href}
      target="_blank"
    >
      {title}
    </Link>
  );
}
