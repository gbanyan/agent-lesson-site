import { defineConfig } from 'astro/config';

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? '/').split('/');
const onGitHub = process.env.GITHUB_ACTIONS === 'true' && Boolean(repository);
const projectBase = onGitHub && !repository.endsWith('.github.io') ? `/${repository}` : '/';
const site = onGitHub ? `https://${owner}.github.io` : 'http://localhost:4321';

export default defineConfig({
  site,
  base: projectBase,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
