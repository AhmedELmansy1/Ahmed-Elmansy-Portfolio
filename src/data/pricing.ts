import { PricingPlan } from '@/types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'bug-fixing',
    serviceName: 'Bug Fixing & Optimization',
    serviceNameAr: 'إصلاح الأخطاء وتحسين الأداء',
    priceUsd: '$25+',
    priceEgp: '1,250 EGP+',
    description: 'Diagnosing and resolving UI bugs, logic errors, or performance bottlenecks in Flutter applications.',
    descriptionAr: 'فحص وتصحيح المشاكل البرمجية وأخطاء الواجهات أو تحسين سرعة التطبيق.',
    features: {
      en: ['UI & Layout Fixes', 'Logic & State Debugging', 'Performance Optimization', 'Code Clean-up'],
      ar: ['إصلاح مشاكل الواجهات والتنسيق', 'حل أخطاء البرمجة وحالة التطبيق', 'تحسين سرعة واستجابة التطبيق', 'مراجعة وتنظيف الكود']
    }
  },
  {
    id: 'flutter-ui-screen',
    serviceName: 'Flutter UI / Single Screen',
    serviceNameAr: 'تصميم واجهة شاشة فلاتر',
    priceUsd: '$30+',
    priceEgp: '1,500 EGP+',
    description: 'Pixel-perfect, responsive Flutter screen implementation based on Figma or design specifications.',
    descriptionAr: 'تكويد وتصميم شاشة فلاتر استجابية بدقة عالية بناءً على تصميم فيجما أو الأفكار المقترحة.',
    features: {
      en: ['Pixel-perfect UI', 'Dark & Light Mode', 'Arabic RTL Support', 'Custom Animations'],
      ar: ['تصميم دقيق ومتقن', 'دعم الوضع الداكن والمضيء', 'دعم كامل للغة العربية RTL', 'تحريكات مخصصة']
    }
  },
  {
    id: 'api-integration',
    serviceName: 'API Integration',
    serviceNameAr: 'ربط واجهات برمجية API',
    priceUsd: '$50+',
    priceEgp: '2,500 EGP+',
    description: 'Connecting Flutter applications with REST APIs, backend authentication, and remote data sources.',
    descriptionAr: 'ربط تطبيق فلاتر بالواجهات البرمجية الخارجية، التوثيق، ومصادر البيانات السحابية.',
    features: {
      en: ['Dio / HTTP Architecture', 'Data Models Parsing', 'Error Handling', 'Token Authentication'],
      ar: ['معمارية Dio / HTTP متطورة', 'تحويل البيانات لـ Models', 'معالجة الاستثناءات والأخطاء', 'توثيق الحسابات والرموز']
    }
  },
  {
    id: 'custom-ui-ux',
    serviceName: 'Custom UI/UX Implementation',
    serviceNameAr: 'تطوير واجهة مستخدم مخصصة',
    priceUsd: '$75+',
    priceEgp: '3,750 EGP+',
    description: 'Creating complete custom component libraries, animated dashboards, and dynamic UI flows.',
    descriptionAr: 'بناء مكتبة مكونات مخصصة، لوحات تحكم متحركة، وتدفقات واجهة تفاعلية.',
    features: {
      en: ['Custom Widget Library', 'Advanced Motion Design', 'Dashboard Components', 'Responsive Scaling'],
      ar: ['مكتبة عناصر مخصصة', 'تحريكات متقدمة', 'عناصر لوحة التحكم', 'توافق مع جميع أحجام الشاشات']
    }
  },
  {
    id: 'ai-integration',
    serviceName: 'AI Integration',
    serviceNameAr: 'دمج خدمات الذكاء الاصطناعي',
    priceUsd: '$100+',
    priceEgp: '5,000 EGP+',
    description: 'Adding intelligent capabilities using Gemini AI, LLM APIs, or custom computer vision endpoints.',
    descriptionAr: 'دمج تقنيات الذكاء الاصطناعي مثل Gemini AI، نماذج اللغة، أو واجهات الرؤية الحاسوبية.',
    features: {
      en: ['Gemini API Integration', 'Prompt Engineering', 'AI Response Formatting', 'Media & Data Analysis'],
      ar: ['ربط واجهة Gemini API', 'صياغة الأوامر الذكية Prompts', 'تنسيق واستقبال ردود الذكاء الاصطناعي', 'تحليل الوسائط والبيانات']
    }
  },
  {
    id: 'small-app',
    serviceName: 'Small Flutter Application',
    serviceNameAr: 'تطبيق فلاتر صغير',
    priceUsd: '$150+',
    priceEgp: '7,500 EGP+',
    description: 'A complete compact Flutter app (3-5 screens) with basic API integration and clean architecture.',
    descriptionAr: 'تطبيق فلاتر متكامل صغير (3-5 شاشات) مع ربط API أساسي ومعمارية برمجية منظمة.',
    features: {
      en: ['Up to 5 Screens', 'BLoC State Management', 'API Integration', 'Localization (Ar/En)'],
      ar: ['حتى 5 شاشات متكاملة', 'إدارة حالة بـ BLoC', 'ربط الواجهات البرمجية', 'دعم اللغتين العربية والإنجليزية']
    }
  },
  {
    id: 'medium-app',
    serviceName: 'Medium Flutter Application',
    serviceNameAr: 'تطبيق فلاتر متوسط',
    priceUsd: '$350+',
    priceEgp: '17,500 EGP+',
    description: 'Feature-rich Flutter application (6-12 screens) with advanced state management and offline storage.',
    descriptionAr: 'تطبيق فلاتر متعدد الميزات (6-12 شاشة) مع إدارة حالة متقدمة وحفظ البيانات ببيئة التطبيق.',
    popular: true,
    features: {
      en: ['Up to 12 Screens', 'Clean Architecture', 'Auth & Security', 'Push Notifications', 'Offline Caching'],
      ar: ['حتى 12 شاشة متكاملة', 'معمارية كود نظيفة Clean Architecture', 'تأمين وتسجيل الدخول', 'إشعارات لحظية', 'تخزين مؤقت للبيانات']
    }
  },
  {
    id: 'full-app',
    serviceName: 'Full Flutter Application',
    serviceNameAr: 'تطبيق فلاتر كامل وشامل',
    priceUsd: '$700+',
    priceEgp: '35,000 EGP+',
    description: 'End-to-end full scale enterprise application with mobile/desktop support, AI integration, and complex backends.',
    descriptionAr: 'تطبيق مؤسسي شامل يدعم الهواتف وسطح المكتب، مدمج بالذكاء الاصطناعي وأنظمة برمجية معقدة.',
    features: {
      en: ['Unlimited Screens', 'Mobile & Desktop Support', 'AI Integration', 'Advanced Forensics / Security', 'Priority Support'],
      ar: ['عدد غير محدود من الشاشات', 'دعم الهاتف وسطح المكتب', 'دمج الذكاء الاصطناعي', 'خصائص أمنية وتحليلية', 'دعم فني وأولوية تطوير']
    }
  }
];
