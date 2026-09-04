const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}` || '/';
}
