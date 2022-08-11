export interface FormState {
  githubUsername: string;
  isGithubUsernameModalOpen: boolean;
}

export interface ChangePayload {
  name: keyof FormState;
  value: FormState[keyof FormState];
}
