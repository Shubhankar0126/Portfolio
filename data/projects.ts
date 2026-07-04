export interface Project {
  slug: string;
  title: string;
  tagline: string;
  confidence: string; // classifier-style headline metric
  problem: string;
  approach: string;
  architecture: string[];
  stack: string[];
  features: string[];
  github?: string;
  liveDemo?: string;
}

export const projects: Project[] = [
  {
    slug: 'counterfeit-currency-detection',
    title: 'Automated Counterfeit Indian Currency Detection',
    tagline: 'Xception CNN + ESP32 edge capture, real-time detection',
    confidence: '99% accuracy',
    problem:
      'Manual verification of currency authenticity does not scale, and existing detection methods rely on specialized hardware unavailable at most points of sale.',
    approach:
      'Trained an Xception convolutional neural network on a curated dataset of 6,400+ currency images using a 70-20-10 train/validation/test split, then paired the model with an ESP32 microcontroller for edge-based image capture, enabling on-device inference without cloud dependency.',
    architecture: [
      'ESP32 camera module captures currency image at point of inspection',
      'Image preprocessing and normalization pipeline',
      'Xception CNN performs feature extraction and classification',
      'On-device deployment for real-time inference at the edge',
    ],
    stack: ['Python', 'TensorFlow', 'Keras', 'Xception CNN', 'ESP32', 'OpenCV'],
    features: [
      '99% detection accuracy with high precision and recall',
      'Edge deployment — no internet connection required for inference',
      'Real-time image capture and classification pipeline',
    ],
  },
  {
    slug: 'alzheimers-detection',
    title: "Alzheimer's Disease Detection using Deep Learning",
    tagline: 'ViT + Swin Transformer for MRI-based stage classification',
    confidence: '99% accuracy · +12% F1',
    problem:
      "Early and accurate staging of Alzheimer's disease from MRI scans is difficult, and clinicians need interpretable model output rather than an opaque classification.",
    approach:
      "Built and compared Vision Transformer (ViT) and Swin Transformer architectures for MRI-based Alzheimer's stage classification, improving generalization through data augmentation, transfer learning, and hyperparameter tuning. Applied Grad-CAM and attention-based visualization so predictions are interpretable rather than a black box.",
    architecture: [
      'MRI scan preprocessing and augmentation pipeline',
      'ViT / Swin Transformer backbone for stage classification',
      'Transfer learning from pretrained weights',
      'Grad-CAM + attention visualization layer for interpretability',
    ],
    stack: ['Python', 'PyTorch', 'Vision Transformer', 'Swin Transformer', 'Grad-CAM'],
    features: [
      '99% classification accuracy across Alzheimer\u2019s stages',
      '12% F1-score improvement via augmentation and tuning',
      'Grad-CAM visualization highlighting disease-relevant brain regions',
    ],
  },
  {
    slug: 'insightboard',
    title: 'InsightBoard — Analytics Dashboard',
    tagline: 'CSV-based analytics with automated insight generation',
    confidence: 'Real-time processing',
    problem:
      'Non-technical users need to explore CSV datasets and surface trends or anomalies without writing analysis code themselves.',
    approach:
      'Built a Flask-based dashboard that ingests CSV data and generates automated insights — trends, anomalies, and summary statistics — through an interactive, responsive interface built with Chart.js.',
    architecture: [
      'Flask backend handles CSV ingestion and processing',
      'Pandas performs statistical analysis and anomaly detection',
      'Chart.js renders interactive, real-time visualizations',
      'Responsive UI with dynamic filtering controls',
    ],
    stack: ['Flask', 'Pandas', 'Chart.js', 'Python'],
    features: [
      'Automated trend and anomaly detection from raw CSV data',
      'Real-time interactive visualizations',
      'Responsive UI with dynamic controls for data-driven decisions',
    ],
  },
];
