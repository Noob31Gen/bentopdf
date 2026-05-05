
export const initLanguageSwitcher = (): void => {
  // No-op
};

export const createLanguageSwitcher = (): HTMLElement => {
  const div = document.createElement('div');
  div.style.display = 'none';
  return div;
};
