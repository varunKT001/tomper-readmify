import { readFileSync } from 'fs';
import path from 'path';

export const templatesInfo = JSON.parse(
  readFileSync(path.resolve(__dirname, 'templates.json')).toString()
);

export const skillBadges = JSON.parse(
  readFileSync(path.resolve(__dirname, 'skillBadges.json')).toString()
);
