/** Deterministic per-instance id for ARIA references (Astro 7 has no Astro.uid). */
export function uid(prefix: string, seed: string): string {
  let h = 5381;
  for (let i = 0; i < seed.length; i++) h = ((h << 5) + h + seed.charCodeAt(i)) >>> 0;
  return `${prefix}${h.toString(36)}`;
}
