export interface FormState {
  githubUsername: string;
  fullName: string;
  fieldsOfWork: string[];
  aboutMe: About[];
  achievements: Achievement[];
  skills: Skill[];
  socials: Social[];
  stats: {
    show: boolean;
    options: {
      streaks: StatsProp;
      contributions: StatsProp;
    };
  };
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface ChangePayload {
  name: keyof FormState;
  value: FormState[keyof FormState];
}

export interface CheckboxPayload {
  name: string;
  value: boolean;
}

export interface ThemePayload {
  name: string;
  value: string;
}

export interface About {
  title: string;
  emoji: string;
  name: string;
  link?: string;
}

export interface Achievement {
  title: string;
  link?: string;
}

export interface StatsProp {
  show: boolean;
  theme: string;
}

export interface Skill {
  skill: string;
  url: string;
}
