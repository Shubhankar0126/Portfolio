export interface Publication {
  title: string;
  venue: string;
  year: string;
  abstract: string;
  status: string;
  doi?: string;
}

export const publications: Publication[] = [
  {
    title:
      'Automated Detection of Counterfeit Indian Currency by Xception CNN and Edge Image Capture with ESP32',
    venue: 'Independent Research',
    year: '2025',
    abstract:
      'Engineered an Xception CNN paired with ESP32-based edge image capture for real-time counterfeit currency detection, improving performance through transfer learning, preprocessing, and data augmentation.',
    status: 'Published',
  },
  {
    title: "Alzheimer's Disease Detection using Deep Learning Models",
    venue: 'ICOSOM, MANIT Bhopal',
    year: '2026',
    abstract:
      'Evaluated deep learning models for MRI-based Alzheimer\u2019s stage classification with interpretability techniques including Grad-CAM and attention visualization.',
    status: 'Best Paper Consideration · Under review at Springer Nature',
  },
];
