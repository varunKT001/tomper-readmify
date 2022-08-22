import { readFileSync } from 'fs';
import path from 'path';

export interface SkillBadge {
  skill: string;
  url: string;
}

export const templatesInfo = JSON.parse(
  readFileSync(path.resolve(__dirname, 'templates.json')).toString()
);

export const streaksThemes = JSON.parse(
  readFileSync(path.resolve(__dirname, 'streaksThemes.json')).toString()
);

export const contributionThemes = JSON.parse(
  readFileSync(path.resolve(__dirname, 'contributionThemes.json')).toString()
);

export const socialIcons = JSON.parse(
  readFileSync(path.resolve(__dirname, 'socialIcons.json')).toString()
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
