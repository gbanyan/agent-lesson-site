/**
 * The colour palette: one source for both themes.
 *
 * `paletteCss()` emits the light tokens plus the dark tokens under the two
 * selectors that can turn dark mode on (system preference without an explicit
 * light choice, and an explicit `data-theme="dark"`), so the two dark blocks can
 * never drift. BaseLayout inlines the result; non-colour tokens stay in
 * `src/styles/tokens.css`.
 */
const light = {
  ink: '#18231f',
  'ink-soft': '#52605a',
  paper: '#f7f5ee',
  surface: '#fffdf8',
  'surface-soft': '#eeeee5',
  line: '#d7d9ce',
  leaf: '#245e49',
  'leaf-dark': '#174333',
  'leaf-pale': '#dcebe2',
  amber: '#b56b22',
  blue: '#285e79',
  focus: '#8e3f21',
  shadow: '0 18px 50px rgb(31 50 42 / 9%)',
};

const dark: typeof light = {
  ink: '#e6eee9',
  'ink-soft': '#b7c4bd',
  paper: '#111815',
  surface: '#18221e',
  'surface-soft': '#222d28',
  line: '#435149',
  leaf: '#83caa7',
  'leaf-dark': '#afe2c7',
  'leaf-pale': '#244035',
  amber: '#e3a563',
  blue: '#7bbbd4',
  focus: '#ffb590',
  shadow: '0 18px 50px rgb(0 0 0 / 28%)',
};

export const palette = { light, dark };

const declarations = (tokens: typeof light, scheme: 'light' | 'dark') =>
  `color-scheme:${scheme};${Object.entries(tokens).map(([name, value]) => `--${name}:${value}`).join(';')}`;

export function paletteCss(): string {
  const darkTokens = declarations(dark, 'dark');
  return `:root{${declarations(light, 'light')}}`
    + `@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){${darkTokens}}}`
    + `:root[data-theme="dark"]{${darkTokens}}`;
}
