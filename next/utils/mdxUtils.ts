import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

export const REPO_ROOT = execSync('git rev-parse --show-toplevel')
  .toString('utf-8')
  .trim();

export const POSTS_ROOT = path.join(REPO_ROOT, 'posts');

export const postFilePaths = fs
  .readdirSync(POSTS_ROOT)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
