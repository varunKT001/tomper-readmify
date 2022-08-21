export interface ExtraState {
  isGithubUsernameModalOpen: boolean;
  skillBadges: SkillBadge[];
  streaks: ThemesInfo;
  contributions: ThemesInfo;
}

export interface ChangePayload {
  name: keyof ExtraState;
  value: ExtraState[keyof ExtraState];
}

export interface SkillBadge {
  skill: string;
  url: string;
}

export interface ThemesInfo {
  base: string;
  themes: string[];
}

export interface FailedResponse {
  success: boolean;
  message: string;
}
