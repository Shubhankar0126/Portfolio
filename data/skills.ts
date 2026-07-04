export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Programming',
    items: ['Python', 'Java', 'SQL', 'JavaScript'],
  },
  {
    label: 'Machine Learning',
    items: ['Deep Learning', 'CNN', 'Transfer Learning', 'NLP', 'Transformers', 'Computer Vision'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'PyTorch', 'Hugging Face', 'FastAPI'],
  },
  {
    label: 'Web',
    items: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'Spring Boot'],
  },
  {
    label: 'GenAI & RAG',
    items: ['Generative AI', 'RAG', 'Vector Databases', 'LLMs', 'Prompt Engineering'],
  },
  {
    label: 'CS Fundamentals',
    items: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Google Colab', 'VS Code'],
  },
];
