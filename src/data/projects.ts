import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'ai-forensics',
    title: 'AI-Powered Digital Forensics System',
    titleAr: 'نظام الأدلة الجنائية الرقمية المدعوم بالذكاء الاصطناعي',
    category: 'AI • Digital Forensics • Cybersecurity',
    categoryAr: 'ذكاء اصطناعي • أدلة رقمية • أمن سيبراني',
    description: 'An AI-powered digital forensics system designed to analyze images, audio, and video and detect possible manipulation or synthetic content using machine learning and forensic analysis techniques.',
    descriptionAr: 'نظام أدلة جنائية رقمية مدعوم بالذكاء الاصطناعي مصمم لتحليل الصور والتسجيلات الصوتية ومقاطع الفيديو واكتشاف التلاعب المحتمل أو المحتوى المزيف باستخدام تقنيات التعلم الآلي والتحليل الجنائي.',
    featured: true,
    technologies: [
      'Python',
      'PyTorch',
      'CNN',
      'ResNet-50',
      'EfficientNet',
      'Grad-CAM',
      'MFCC',
      'AASIST',
      'XLS-R',
      'Spectrogram Analysis',
      'FFmpeg',
      'Digital Forensics'
    ],
    features: {
      en: [
        'Image forgery detection',
        'Audio deepfake detection',
        'Video analysis',
        'Error Level Analysis (ELA)',
        'Metadata analysis',
        'Noise analysis',
        'Spectrogram analysis',
        'AI confidence scoring',
        'Grad-CAM heatmaps',
        'SHA-256 evidence hashing',
        'Forensic report generation'
      ],
      ar: [
        'كشف تزوير وتعديل الصور',
        'كشف التزييف الصوتي العميق (Deepfake)',
        'تحليل الفيديو وتدقيق الإطارات',
        'تحليل مستوى الخطأ (ELA)',
        'تحليل البيانات الوصفية (Metadata)',
        'تحليل الضوضاء الرقمية (Noise Analysis)',
        'تحليل الطيف الصوتي (Spectrogram)',
        'تقييم نسبة الثقة بالذكاء الاصطناعي',
        'خرائط حرارية حرارية Grad-CAM',
        'تشفير SHA-256 لحماية الأدلة الجنائية',
        'توليد تقارير جنائية تفصيلية'
      ]
    },
    image: '/images/projects/forensic/main.jpg',
    images: [
      '/images/projects/forensic/main.jpg',
      '/images/projects/forensic/1.jpg',
      '/images/projects/forensic/2.jpg',
      '/images/projects/forensic/3.jpg',
      '/images/projects/forensic/4.jpg',
      '/images/projects/forensic/5.jpg'
    ]
  },
  {
    id: 'shoot-live',
    title: 'Shoot Live',
    titleAr: 'شوت لايف',
    category: 'Flutter • Sports • Real-Time',
    categoryAr: 'فلاتر • رياضة • ببيانات مباشرة',
    description: 'A football live-score and match tracking application focused on real-time match information and dynamic match-state handling.',
    descriptionAr: 'تطبيق متابعة مباريات كرة القدم ونتائجها المباشرة مع التركيز على عرض البيانات في الوقت الفعلي ومعالجة حالات المباراة الديناميكية.',
    featured: false,
    technologies: [
      'Flutter',
      'Dart',
      'REST APIs',
      'Real-Time Data',
      'Dynamic Match Logic'
    ],
    features: {
      en: [
        'Live match score tracking',
        'Dynamic match minute calculation',
        'Match status handling (First Half, Half Time, Second Half, Finished)',
        'Clean responsive match cards',
        'Live statistics display'
      ],
      ar: [
        'متابعة نتائج المباريات المباشرة',
        'حساب دقيقة المباراة الديناميكية تلقائياً',
        'معالجة حالات المباراة (الشوط الأول، الاستراحة، الشوط الثاني، انتهت)',
        'بطاقات مباريات استجابية وأنيقة',
        'عرض إحصائيات المباراة المباشرة'
      ]
    },
    importantNote: {
      en: 'The application live minute logic was enhanced to dynamically calculate match time using match date, match start time, and match state (First Half, Half Time, Second Half, Finished) replacing static hardcoded timers.',
      ar: 'تم تطوير منطق حساب دقيقة المباراة ليكون ديناميكياً يعتمد على تاريخ ووقت بداية المباراة وحالة شوط المباراة بدلاً من القيم الثابتة.'
    },
    image: '/images/projects/shoot-live/main.jpg',
    images: [
      '/images/projects/shoot-live/main.jpg',
      '/images/projects/shoot-live/1.jpg',
      '/images/projects/shoot-live/2.jpg',
      '/images/projects/shoot-live/3.jpg',
      '/images/projects/shoot-live/4.jpg'
    ]
  },
  {
    id: 'forests-team',
    title: 'Forests Team',
    titleAr: 'فريق فورستس',
    category: 'Flutter • Team Management • UI/UX',
    categoryAr: 'فلاتر • إدارة الفرق • واجهة المستخدم',
    description: 'A modern team and task management Flutter application focused on polished frontend experience, responsive design, notifications, animations, and bilingual support.',
    descriptionAr: 'تطبيق فلاتر حديث لإدارة الفرق والمهام يركز على تقديم تجربة واجهة مستخدم فائقة الجودة، تصميم استجابي، إشعارات، تحريكات سلسة، ودعم كامل للغتين العربية والإنجليزية.',
    featured: false,
    technologies: [
      'Flutter',
      'Dart',
      'Material 3',
      'BLoC',
      'REST API Architecture',
      'Responsive UI'
    ],
    features: {
      en: [
        'Animated splash screen',
        'Dashboard & statistics cards',
        'Recent activityfeed',
        'Task management & details view',
        'Notifications & unread badge count',
        'Mark all notifications as read',
        'User & developer profile',
        'Dark mode toggle',
        'Arabic/English RTL support',
        'API-ready modular architecture'
      ],
      ar: [
        'شاشة ترحيبية متحركة',
        'لوحة تحكم وبطاقات إحصائيات',
        'سجل النشاطات الأخيرة',
        'إدارة المهام وعرض التفاصيل',
        'نظام إشعارات وشارة التنبيهات غير المقروءة',
        'تحديد جميع الإشعارات كمقروءة',
        'ملف شخصي وملف المطور',
        'الوضع الداكن والفتح',
        'دعم العربية والإنجليزية مع RTL',
        'معمارية برمجية جاهزة للربط بالـ API'
      ]
    },
    importantNote: {
      en: 'Presented as a polished frontend & demo application showcasing high-quality Flutter UI design and smooth state management.',
      ar: 'تطبيق استعراضي متميز يبرز دقة التصميم وسلاسة واجهات المستخدم في فلاتر.'
    },
    image: '/images/projects/forests-team/main.jpg',
    images: [
      '/images/projects/forests-team/main.jpg',
      '/images/projects/forests-team/1.jpg',
      '/images/projects/forests-team/2.jpg',
      '/images/projects/forests-team/3.jpg'
    ]
  },
  {
    id: 'mansy-store',
    title: 'Mansy Store',
    titleAr: 'متجر المنسي',
    category: 'Flutter • Desktop',
    categoryAr: 'فلاتر • تطبيقات سطح المكتب',
    description: 'A Flutter-based desktop application project demonstrating application UI development and desktop-focused Flutter development.',
    descriptionAr: 'مشروع تطبيق سطح مكتكب مبني باستخدام فلاتر يوضح مهارات بناء واجهات المستخدم وتطوير تطبيقات سطح المكتب.',
    featured: false,
    technologies: [
      'Flutter',
      'Dart',
      'Desktop Windows UI',
      'State Management',
      'Custom Responsive Widgets'
    ],
    features: {
      en: [
        'Desktop-optimized layout',
        'Product showcase interface',
        'Custom navigation sidebar',
        'Responsive desktop windows handling'
      ],
      ar: [
        'واجهة مخصصة لشاشات أجهزة الكمبيوتر',
        'شاشة عرض المنتجات',
        'شريط تنقل جانبي مخصص',
        'التعامل الاستجابي مع نوافذ سطح المكتب'
      ]
    },
    githubUrl: 'https://github.com/AhmedELmansy1/mansy-store',
    image: '/images/projects/mansy-store/main.jpg',
    images: [
      '/images/projects/mansy-store/main.jpg',
      '/images/projects/mansy-store/1.jpg',
      '/images/projects/mansy-store/2.jpg'
    ]
  },
  {
    id: 'iti-flutter-project',
    title: 'ITI Flutter Project',
    titleAr: 'مشروع فلاتر ITI',
    category: 'Flutter • Clean Architecture • AI',
    categoryAr: 'فلاتر • المعمارية النظيفة • ذكاء اصطناعي',
    description: 'A Flutter project developed during ITI training, demonstrating application architecture, authentication, state management, API integration, AI integration, and wishlist functionality.',
    descriptionAr: 'مشروع فلاتر تم تطويره خلال تدريب معهد تكنولوجيا المعلومات ITI يبرز تطبيق معمارية البرمجيات النظيفة، التوثيق، إدارة الحالة، ربط الـ API، والذكاء الاصطناعي.',
    featured: false,
    technologies: [
      'Flutter',
      'Dart',
      'BLoC',
      'Clean Architecture',
      'Dependency Injection',
      'REST APIs',
      'Gemini / AI Integration'
    ],
    features: {
      en: [
        'Clean Architecture separation of layers',
        'Authentication & login use case',
        'AI recommendation system',
        'Gemini AI API integration',
        'Wishlist management',
        'Remote data source handling with Dio'
      ],
      ar: [
        'تقسيم الطبقات وفق معمارية Clean Architecture',
        'نظام التوثيق وتسجيل الدخول',
        'نظام التوصية الذكي بالذكاء الاصطناعي',
        'دمج نموذج Gemini AI',
        'إدارة قائمة الرغبات (Wishlist)',
        'معالجة مصادر البيانات الخارجية عبر Dio'
      ]
    },
    image: '/images/projects/iti/main.jpg',
    images: [
      '/images/projects/iti/main.jpg',
      '/images/projects/iti/1.jpg',
      '/images/projects/iti/2.jpg',
      '/images/projects/iti/3.jpg'
    ]
  }
];
