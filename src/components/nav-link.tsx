import { navigate } from "astro:transitions/client";
import { useHotkeys } from "react-hotkeys-hook";

export default function NavLink({
  href,
  children,
  shortcut,
}: {
  href: string;
  children: React.ReactNode;
  shortcut: string;
}) {
  useHotkeys(shortcut, () => {
    navigate(href);
  });

  return (
    <a href={href} className="font-mono flex flex-row gap-[2px]">
      {children}
    </a>
  );
}
