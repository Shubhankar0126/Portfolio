export interface Certification {
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services' },
  { name: 'AWS Solutions Architect Associate', issuer: 'Amazon Web Services' },
  { name: 'AWS AI Practitioner', issuer: 'Amazon Web Services' },
  { name: 'Azure Data Fundamentals (DP-900)', issuer: 'Microsoft' },
  { name: 'Watsonx Generative AI', issuer: 'IBM' },
  { name: 'Applied Machine Learning in Python', issuer: 'University of Michigan' },
  { name: 'Cloud Computing', issuer: 'NPTEL' },
  { name: 'Data Science', issuer: 'Cisco' },
];
