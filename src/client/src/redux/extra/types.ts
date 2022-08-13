export interface ExtraState {
  isGithubUsernameModalOpen: boolean;
}

export interface ChangePayload {
  name: keyof ExtraState;
  value: ExtraState[keyof ExtraState];
}
