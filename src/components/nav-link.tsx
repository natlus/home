import { navigate } from "astro:transitions/client";
import { useHotkeys } from "react-hotkeys-hook";

export default function NavLink({
  href,
  children,
  shortcut,
  target,
}: {
  href: string;
  children: React.ReactNode;
  shortcut: string;
  target?: "_blank";
}) {
  useHotkeys(shortcut, () => {
    if (target === "_blank") {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    navigate(href);
  });

  return (
    <a
      href={href}
      className="text-primary! hover:text-orange! flex flex-row gap-[6px]"
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
