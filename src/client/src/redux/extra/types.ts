export interface ExtraState {
  isGithubUsernameModalOpen: boolean;
  isReviewModalOpen: boolean;
  skillBadges: SkillBadge[];
  streaks: ThemesInfo;
  contributions: ThemesInfo;
  socialIcons: SocialIcons;
  profileViews: ProfileViews;
}

export interface ProfileViews {
  base: string;
  themes: string[];
  styles: string[];
}

export interface SocialIcons {
  base: string;
  icons: {
    [key: string]: string;
  };
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
