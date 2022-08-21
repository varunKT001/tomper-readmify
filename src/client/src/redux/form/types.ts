export interface FormState {
  githubUsername: string;
  fullName: string;
  fieldsOfWork: string[];
  aboutMe: About[];
  achievements: Achievement[];
  skills: Skill[];
  stats: {
    show: boolean;
    options: {
      streaks: StatsProp;
      contributions: StatsProp;
    };
  };
}

export interface ChangePayload {
  name: keyof FormState;
  value: FormState[keyof FormState];
}

export interface CheckboxPayload {
  name: string;
  value: boolean;
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
