export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Achievements", href: "/achievements/" },
  { label: "Experience", href: "/experience/" },
  { label: "Projects", href: "/projects/" },
  { label: "Research & Writing", href: "/research/" },
  { label: "Posts", href: "/posts/" }
];

export function isActivePath(currentPath: string, href: string) {
  if (href === "/") return currentPath === "/";
  return currentPath.startsWith(href);
}
