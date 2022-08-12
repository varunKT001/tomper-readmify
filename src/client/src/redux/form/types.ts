export interface FormState {
  githubUsername: string;
  fullName: string;
  fieldsOfWork: string[];
  aboutMe: About[];
  isGithubUsernameModalOpen: boolean;
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
