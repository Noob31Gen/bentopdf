
/**
 * Mock i18n implementation for single-language (English) mode.
 * This file replaces the original i18next-based implementation.
 */

export const t = (key: string, params?: Record<string, any>): string => {
  // Extract the last part of the key (e.g., "tools:merge.name" -> "name")
  // or use the whole thing if no dots
  const parts = key.split('.');
  const lastPart = parts[parts.length - 1];
  
  // Convert camelCase or snake_case to Title Case for a better fallback
  let message = lastPart
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]/g, ' ')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();

  // If the key is specifically for a name or title, and we can't find a good message,
  // we might want to be more specific. But for now, this is a decent generic fallback.
  
  // Handle parameters if present
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      message = message.replace(new RegExp(`{{${k}}}`, 'g'), String(v));
      message = message.replace(new RegExp(`{${k}}`, 'g'), String(v));
    });
  }

  return message;
};

export const applyTranslations = (): void => {
  // No-op in single-language mode as we've stripped data-i18n attributes
};

export const initI18n = async (): Promise<void> => {
  // No-op
};

export const getCurrentLanguage = (): string => 'en';

export const changeLanguage = async (): Promise<void> => {
  // No-op
};
