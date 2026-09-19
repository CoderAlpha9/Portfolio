import { withBase } from "./paths";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Achievements", href: "/achievements/" },
  { label: "Experience", href: "/experience/" },
  { label: "Projects", href: "/projects/" },
  { label: "Research & Writing", href: "/research/" },
  { label: "Posts", href: "/posts/" }
];

export function navHref(href: string) {
  return withBase(href);
}

export function isActivePath(currentPath: string, href: string) {
  const resolved = navHref(href);
  if (href === "/") return currentPath === resolved || currentPath === resolved.replace(/\/$/, "");
  return currentPath.startsWith(resolved);
}
