import { ExperienceItem } from '@/types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'flutter-dev-exp',
    role: 'Flutter Application Development',
    roleAr: 'تطوير تطبيقات فلاتر',
    type: 'Project & Technical Experience',
    typeAr: 'خبرة مشاريع وتقنية',
    period: '2022 - Present',
    periodAr: '2022 - الحالي',
    description: 'Engineered high-performance mobile and desktop applications with state management (BLoC), Clean Architecture, and custom UI components.',
    descriptionAr: 'تطوير تطبيقات هاتف وسطح مكتب عالية الأداء باستخدام أنظمة إدارة الحالة (BLoC)، معمارية الكود النظيفة، ومكونات واجهة مخصصة.',
    highlights: {
      en: [
        'Implemented BLoC state management and Repository Pattern',
        'Built desktop and Android user experiences with Flutter & Dart',
        'Developed full Arabic/English RTL support and localization',
        'Engineered responsive layouts for multiple screen sizes'
      ],
      ar: [
        'تطبيق إدارة الحالة عبر BLoC ونمط Repository',
        'بناء تجارب مستخدم متميزة للأندرويد وسطح المكتب عبر فلاتر ودارت',
        'تطوير دعم كامل للغتين العربية والإنجليزية والتوجيه اليميني RTL',
        'تجهيز تصميمات استجابية تناسب مختلف أحجام الشاشات'
      ]
    },
    technologies: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'Material 3', 'RTL']
  },
  {
    id: 'ai-forensics-exp',
    role: 'AI & Digital Forensics Development',
    roleAr: 'تطوير الذكاء الاصطناعي والأدلة الجنائية',
    type: 'Graduation & Research Project',
    typeAr: 'مشروع التخرج والبحث العلمي',
    period: '2023 - 2024',
    periodAr: '2023 - 2024',
    description: 'Researched and built deep neural network pipelines to analyze multimedia (image, audio, video) for forgery detection and evidence hashing.',
    descriptionAr: 'بحث وتطوير خوارزميات الشبكات العصبية العميقة لتحليل الوسائط المتعددة (صور، صوت، فيديو) واكتشاف التزوير وتشفير الأدلة الرقمية.',
    highlights: {
      en: [
        'Designed ResNet-50 and EfficientNet models for image forgery detection',
        'Integrated Grad-CAM visualization for AI decision heatmaps',
        'Implemented ELA, noise analysis, and SHA-256 cryptographic evidence hashing',
        'Analyzed audio deepfakes with AASIST and Spectrogram representations'
      ],
      ar: [
        'تصميم نماذج ResNet-50 و EfficientNet لكشف تلاعب الصور',
        'دمج تقنية Grad-CAM لتوليد خرائط حرارية تفسر قرارات الذكاء الاصطناعي',
        'تطبيق تحليل مستوى الخطأ ELA والضوضاء وتشفير الأدلة بـ SHA-256',
        'تحليل التزييف الصوتي العميق باستخدام AASIST والتمثيل الطيفي Spectrogram'
      ]
    },
    technologies: ['Python', 'PyTorch', 'Grad-CAM', 'Spectrogram', 'FFmpeg', 'SHA-256']
  },
  {
    id: 'api-backend-exp',
    role: 'API & Backend Integration',
    roleAr: 'تكامل الواجهات البرمجية والخلفية',
    type: 'Technical Experience',
    typeAr: 'خبرة تقنية',
    period: '2022 - Present',
    periodAr: '2022 - الحالي',
    description: 'Integrated complex REST APIs, authentication services, and third-party AI endpoints using Dio and clean data source abstraction.',
    descriptionAr: 'تكامل الواجهات البرمجية المعقدة REST APIs، خدمات التوثيق، وربط خدمات الذكاء الاصطناعي عبر Dio وتجريد مصادر البيانات.',
    highlights: {
      en: [
        'Connected Flutter frontends with FastAPI backends and external REST APIs',
        'Handled authentication flows, tokens, and secure local storage',
        'Integrated Gemini AI APIs for dynamic intelligent recommendations'
      ],
      ar: [
        'ربط واجهات فلاتر بخلفيات FastAPI وواجهات برمجية خارجية',
        'معالجة تدفقات تسجيل الدخول والتوثيق والتخزين الآمن',
        'دمج واجهات Gemini AI لتوليد توصيات استثنائية'
      ]
    },
    technologies: ['Python', 'FastAPI', 'Dio', 'REST APIs', 'Gemini AI', 'JSON']
  },
  {
    id: 'ui-ux-exp',
    role: 'UI/UX & Mobile Motion Design',
    roleAr: 'تطوير الواجهات والتحريك التفاعلي',
    type: 'Design & Frontend Experience',
    typeAr: 'خبرة التصميم والواجهات',
    period: '2022 - Present',
    periodAr: '2022 - الحالي',
    description: 'Crafted sleek, high-fidelity UI components, custom animations, and responsive dashboard screens across mobile and desktop apps.',
    descriptionAr: 'صياغة مكونات واجهة مستخدم عالية الدقة، تحريكات مخصصة، وشاشات لوحات تحكم استجابية للهواتف وأجهزة الكمبيوتر.',
    highlights: {
      en: [
        'Built custom splash screens, dark/light theme switching, and interactive widgets',
        'Applied pixel-perfect Material 3 standards and animation physics',
        'Optimized UI layouts for flawless performance across device widths'
      ],
      ar: [
        'بناء شاشات ترحيبية متحركة، تبديل الثيم المظلم/المضيء، وودجتس تفاعلية',
        'تطبيق معايير Material 3 بدقة متناهية مع تحريكات فيزيائية ناعمة',
        'تحسين تخطيطات الواجهة لضمان أداء سلس وسريع على كافة الشاشات'
      ]
    },
    technologies: ['Flutter', 'Material 3', 'Framer Motion', 'Tailwind CSS', 'Responsive UI']
  }
];
