export interface FormState {
  githubUsername: string;
  fullName: string;
  fieldsOfWork: string[];
  aboutMe: About[];
  achievements: Achievement[];
  skills: Skill[];
}

export interface ChangePayload {
  name: keyof FormState;
  value: FormState[keyof FormState];
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

export default interface Skill {
  skill: string;
  url: string;
}
