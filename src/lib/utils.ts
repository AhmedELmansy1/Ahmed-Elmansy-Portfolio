import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string, lang: 'en' | 'ar' = 'en'): string {
  if (!dateString) return '';

  if (lang === 'ar') {
    // Basic Arabic date conversion support if needed
    const monthsMap: { [key: string]: string } = {
      January: 'يناير', February: 'فبراير', March: 'مارس', April: 'أبريل',
      May: 'مايو', June: 'يونيو', July: 'يوليو', August: 'أغسطس',
      September: 'سبتمبر', October: 'أكتوبر', November: 'نوفمبر', December: 'ديسمبر'
    };
    let formatted = dateString;
    Object.keys(monthsMap).forEach(m => {
      formatted = formatted.replace(m, monthsMap[m]);
    });
    return formatted;
  }
  return dateString;
}
