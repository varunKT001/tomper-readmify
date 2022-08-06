export interface TemplateState {
  templateName: string;
}

export interface ChangePayload {
  name: keyof TemplateState;
  value: TemplateState[keyof TemplateState];
}
