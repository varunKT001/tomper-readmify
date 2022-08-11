export interface TemplateState {
  templateName: string;
  templateString: string;
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
