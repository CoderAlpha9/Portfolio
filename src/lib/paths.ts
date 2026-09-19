export function withBase(path = "") {
  const base = import.meta.env.BASE_URL;
  if (!path || path === "/") return base;
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}${path.replace(/^\/+/, "")}`;
}
