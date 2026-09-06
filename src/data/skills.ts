import { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    id: 'development',
    title: 'Development',
    titleAr: 'تطوير التطبيقات',
    iconName: 'Smartphone',
    skills: [
      { name: 'Flutter', highlight: true },
      { name: 'Dart', highlight: true },
      { name: 'Android Development' },
      { name: 'Desktop Development' },
      { name: 'Responsive UI' },
      { name: 'Material 3' },
      { name: 'Animations' },
      { name: 'Localization' },
      { name: 'RTL Support' }
    ]
  },
  {
    id: 'architecture',
    title: 'Architecture',
    titleAr: 'المعمارية والهيكلة',
    iconName: 'Cpu',
    skills: [
      { name: 'BLoC', highlight: true },
      { name: 'Clean Architecture', highlight: true },
      { name: 'Repository Pattern' },
      { name: 'Dependency Injection' }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    titleAr: 'الذكاء الاصطناعي والتعلم الآلي',
    iconName: 'Brain',
    skills: [
      { name: 'AI / Machine Learning', highlight: true },
      { name: 'PyTorch', highlight: true },
      { name: 'Hugging Face' },
      { name: 'Gemini AI' },
      { name: 'AI APIs' },
      { name: 'CNN' },
      { name: 'ResNet-50' },
      { name: 'EfficientNet' },
      { name: 'Grad-CAM' }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Digital Forensics',
    titleAr: 'الأمن السيبراني والأدلة الجنائية',
    iconName: 'ShieldAlert',
    skills: [
      { name: 'Cybersecurity', highlight: true },
      { name: 'Digital Forensics', highlight: true },
      { name: 'Information Security' },
      { name: 'Image Forensics' },
      { name: 'Audio Forensics' },
      { name: 'Video Forensics' },
      { name: 'Metadata Analysis' },
      { name: 'Error Level Analysis (ELA)' },
      { name: 'Noise Analysis' },
      { name: 'SHA-256 Hashing' },
      { name: 'Linux' },
      { name: 'Network Security' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Backend',
    titleAr: 'الأدوات والواجهات',
    iconName: 'Wrench',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'FastAPI', highlight: true },
      { name: 'Dio / REST APIs' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Android Studio' },
      { name: 'VS Code' },
      { name: 'FFmpeg' }
    ]
  }
];
