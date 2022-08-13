export interface TemplateState {
  loading: boolean;
  templateName: string;
  templateString: string;
  markdown: string;
  acceptedFields: string[];
}

export interface ChangePayload {
  name: keyof TemplateState;
  value: TemplateState[keyof TemplateState];
}

export interface FailedResponse {
  success: boolean;
  message: string;
}
