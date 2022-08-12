export interface FormState {
  githubUsername: string;
  fullName: string;
  fieldsOfWork: string[];
  isGithubUsernameModalOpen: boolean;
}

export interface ChangePayload {
  name: keyof FormState;
  value: FormState[keyof FormState];
}
