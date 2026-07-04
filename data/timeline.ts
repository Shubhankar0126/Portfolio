export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'milestone';
}

export const timeline: TimelineItem[] = [
  {
    year: '2020',
    title: 'Sky International School',
    description: 'Secondary education (Class X), CBSE.',
    type: 'education',
  },
  {
    year: '2022',
    title: 'Air Force School',
    description: 'Senior Secondary (Class XII), CBSE.',
    type: 'education',
  },
  {
    year: '2023',
    title: 'Vellore Institute of Technology, Bhopal',
    description:
      'B.Tech in Computer Science and Engineering — AI & Machine Learning. CGPA 8.70/10. In progress.',
    type: 'education',
  },
  {
    year: '2025',
    title: 'Amazon AI/ML Challenge',
    description: 'Ranked 85th nationally among large-scale participants.',
    type: 'milestone',
  },
  {
    year: '2026',
    title: 'ICOSOM Conference, MANIT Bhopal',
    description: "Best Paper Consideration for Alzheimer's Disease Detection research.",
    type: 'milestone',
  },
  {
    year: '2026',
    title: 'Smart India Hackathon — Final Round',
    description: 'Qualified at college level among 1,000+ competing teams.',
    type: 'milestone',
  },
];
