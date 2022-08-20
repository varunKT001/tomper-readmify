import { readFileSync } from 'fs';
import path from 'path';

export interface SkillBadge {
  skill: string;
  url: string;
}

export const templatesInfo = JSON.parse(
  readFileSync(path.resolve(__dirname, 'templates.json')).toString()
);

export const skillBadges = JSON.parse(
  readFileSync(path.resolve(__dirname, 'skillBadges.json')).toString()
).filter((value: SkillBadge, index: number, self: SkillBadge[]) => {
  return (
    index ===
    self.findIndex((obj) => {
      return obj.skill === value.skill;
    })
  );
});
