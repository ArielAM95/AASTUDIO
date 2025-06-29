
import { Globe, Zap, Users, ShoppingCart, Smartphone } from "lucide-react";

export const examples = [
  {
    title: "ענבל טיפוח ויופי",
    description: "דף נחיתה מהמם מושך וצבעוני שמותאם לקהל נשי ומיועד לעודד פניה בוואטסאפ",
    url: "https://preview--inbal-touch-design.lovable.app/",
    linkText: "ראה דוגמה חיה",
    category: "דף נחיתה",
    categoryColor: "bg-pink-500",
    icon: Users,
    gradient: "from-pink-500/10 to-purple-500/10",
    image: "/lovable-uploads/911f1943-de7e-41a1-a1e8-beabba2570d5.png"
  },
  {
    title: "דף מבצע שיווקי",
    description: "דף נחיתה ממוקד למבצע שיווקי מיוחד, עם טופס לאיסוף לידים ועיצוב מושך שמעודד המרות",
    url: "https://review.ofair.co.il",
    linkText: "ראה דוגמה חיה",
    category: "מבצע",
    categoryColor: "bg-orange-500",
    icon: Zap,
    gradient: "from-orange-500/10 to-red-500/10",
    image: "/placeholder.svg"
  },
  {
    title: "אתר להזמנת נופש בסאן מרינו",
    description: "אתר יפיפה להזמנת מקום בנופש, עם מערכת הזמנות מתקדמת, אוטומציות מלאות ועיצוב משתמש מדהים",
    url: "https://preview--m-539974.lovable.app/",
    linkText: "ראה דוגמה חיה",
    category: "אתר עסקי",
    categoryColor: "bg-blue-500",
    icon: Globe,
    gradient: "from-blue-500/10 to-cyan-500/10",
    image: "/placeholder.svg"
  },
  {
    title: "דף נחיתה לאיסוף לידים עסקיים - מופט",
    description: "מופט ישראל בחרו לפנות לחברות הייטק ולהציע מתנות איכותיות לעובדים. דף עם אוטומציות מתקדמות ללידים וקו מובהק להשארת פרטים",
    url: "https://preview--moft-tech-gifts.lovable.app/",
    linkText: "ראה דוגמה חיה",
    category: "B2B",
    categoryColor: "bg-green-500",
    icon: ShoppingCart,
    gradient: "from-green-500/10 to-emerald-500/10",
    image: "/placeholder.svg"
  },
  {
    title: "אפליקציית ניהול תעופה",
    description: "אפליקציה לניהול הצעות מחיר ולוגיסטיקה בתחום התעופה עם ממשק מתקדם וחווית משתמש מעולה",
    url: "https://preview--airfq-aero-bid-nexus.lovable.app/",
    linkText: "ראה דוגמה חיה",
    category: "אפליקציה עסקית",
    categoryColor: "bg-indigo-500",
    icon: Smartphone,
    gradient: "from-indigo-500/10 to-purple-500/10",
    image: "/placeholder.svg"
  },
  {
    title: "אפליקציית שירות לקוחות",
    description: "אפליקציה לניהול פניות לקוחות וטיפול בבקשות שירות עם מערכת ניהול מתקדמת ואוטומציות",
    url: "https://ofair.co.il",
    linkText: "ראה דוגמה חיה",
    category: "אפליקציה עסקית",
    categoryColor: "bg-indigo-500",
    icon: Smartphone,
    gradient: "from-indigo-500/10 to-purple-500/10",
    image: "/placeholder.svg"
  },
  {
    title: "מערכת ניהול משאבי אנוש",
    description: "פלטפורמה מתקדמת לניהול עובדים, שעות עבודה, חופשות ומשכורות עם ממשק ידידותי למשתמש",
    url: "https://hrms-demo.lovable.app/",
    linkText: "ראה דוגמה חיה",
    category: "אפליקציה עסקית",
    categoryColor: "bg-indigo-500",
    icon: Smartphone,
    gradient: "from-indigo-500/10 to-purple-500/10",
    image: "/placeholder.svg"
  },
  {
    title: "פלטפורמת ניהול פרויקטים",
    description: "כלי מתקדם לניהול פרויקטים עם תכונות שיתוף, מעקב זמנים ודוחות מפורטים לצוותי עבודה",
    url: "https://project-management-demo.lovable.app/",
    linkText: "ראה דוגמה חיה",
    category: "אפליקציה עסקית",
    categoryColor: "bg-indigo-500",
    icon: Smartphone,
    gradient: "from-indigo-500/10 to-purple-500/10",
    image: "/placeholder.svg"
  },
  {
    title: "מערכת CRM לניהול לקוחות",
    description: "פתרון מותאם לעסקים לניהול קשרי לקוחות, מעקב הזדמנויות מכירה ואוטומציה שיווקית",
    url: "https://crm-demo.lovable.app/",
    linkText: "ראה דוגמה חיה",
    category: "אפליקציה עסקית",
    categoryColor: "bg-indigo-500",
    icon: Smartphone,
    gradient: "from-indigo-500/10 to-purple-500/10",
    image: "/placeholder.svg"
  }
];

export const categories = [
  { id: 'all', name: 'כל הדוגמאות', count: examples.length },
  { id: 'דף נחיתה', name: 'דפי נחיתה', count: examples.filter(ex => ex.category === 'דף נחיתה').length },
  { id: 'אתר עסקי', name: 'אתרים עסקיים', count: examples.filter(ex => ex.category === 'אתר עסקי').length },
  { id: 'אפליקציה עסקית', name: 'אפליקציות עסקיות', count: examples.filter(ex => ex.category === 'אפליקציה עסקית').length },
  { id: 'מבצע', name: 'דפי מבצעים', count: examples.filter(ex => ex.category === 'מבצע').length },
  { id: 'B2B', name: 'פתרונות B2B', count: examples.filter(ex => ex.category === 'B2B').length }
];
