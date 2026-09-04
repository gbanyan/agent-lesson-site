# Deployment

- Architecture: local development → Git repository → GitHub Actions quality gate → static `dist/` → GitHub Pages.
- Production branch: `main`. Pull requests run checks but do not deploy.
- Workflow: `.github/workflows/pages.yml` using GitHub-maintained Pages actions.
- Local preflight: `npm run verify`.
- Status: `gh run list --workflow pages.yml`; failure details: `gh run view <run-id> --log-failed`.
- Normal retry: fix the cause, run local preflight, commit, and push to `main`; or use the workflow’s `workflow_dispatch` trigger for the same committed state.
- Pages URL and custom domain are configured in repository Settings → Pages. The confirmed public URL is recorded in `docs/IMPLEMENTATION_STATUS.md` after first deployment.

`dist/` is vendor-neutral static output and is not committed. Static frontend content must be treated as public; no runtime secrets are required.
