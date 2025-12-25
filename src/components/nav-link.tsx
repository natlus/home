import { navigate } from "astro:transitions/client";
import { useHotkeys } from "react-hotkeys-hook";

export default function NavLink({
  href,
  children,
  className,
  shortcut,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  shortcut: string;
}) {
  useHotkeys(shortcut, () => {
    navigate(href);
  });

  return (
    <a href={href} className={`header-link font-mono flex flex-row gap-[2px] ${className}`}>
      {children}
    </a>
  );
}
