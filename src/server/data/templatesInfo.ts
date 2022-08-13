export interface TemplatesInfo {
  [key: string]: { acceptedFields: string[] };
}

export const templatesInfo: TemplatesInfo = {
  simple: {
    acceptedFields: ['fullName', 'aboutMe'],
  },
  classic: {
    acceptedFields: [
      'fullName',
      'fieldsOfWork',
      'aboutMe',
      'achievements',
      'githubUsername',
    ],
  },
};
