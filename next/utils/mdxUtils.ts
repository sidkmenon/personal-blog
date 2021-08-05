import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

export const REPO_ROOT = execSync('git rev-parse --show-toplevel')
  .toString('utf-8')
  .trim();

export const CONTENT_PATH = path.join(REPO_ROOT, 'content');

export const contentFilePaths = fs
  .readdirSync(CONTENT_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
