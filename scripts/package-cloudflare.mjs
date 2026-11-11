import { loadAndParseConfig } from '@cloudflare/config';
import {
  cleanBuildOutputDir,
  writeAssets,
  writeWorkerConfig,
  writeRootConfig,
  readBuildOutput,
} from '@cloudflare/build-output-utils';
import { resolve } from 'node:path';
import { access } from 'node:fs/promises';

const root = process.cwd();
await access(resolve(root, 'dist/index.html'));
const context = { isPreview: false, mode: undefined };
const result = await loadAndParseConfig(resolve(root, 'cloudflare.config.ts'), context);
if (!result.result.success) throw new Error(JSON.stringify(result.result, null, 2));
const { worker, containers: _containers, ...settings } = result.result.data;
if (!worker) throw new Error('Missing Worker configuration');
await cleanBuildOutputDir(root);
await writeRootConfig(root, settings, context);
await writeWorkerConfig({ root, config: worker });
await writeAssets({ root, sourceDirectory: resolve(root, 'dist') });
const output = await readBuildOutput(root);
if (!output.workers.default.assetsDir || output.workers.default.bundleDir)
  throw new Error('Expected assets-only Worker');
console.log('Cloudflare assets-only package ready; no upload or DNS operation performed.');
