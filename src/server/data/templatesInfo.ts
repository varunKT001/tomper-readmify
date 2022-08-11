export interface TemplatesInfo {
  [key: string]: { acceptedFields: string[] };
}

export const templatesInfo: TemplatesInfo = {
  simple: {
    acceptedFields: ['fullName'],
  },
  classic: {
    acceptedFields: ['fullName', 'fields', 'githubUsername'],
  },
};
