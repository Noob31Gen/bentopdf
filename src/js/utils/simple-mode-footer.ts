
// Handle simple mode adjustments for tool pages
if (__SIMPLE_MODE__) {
  const sectionsToHide = [
    'How It Works',
    'Related PDF Tools',
    'Related Tools',
    'Frequently Asked Questions',
  ];

  document.querySelectorAll('section').forEach((section) => {
    const h2 = section.querySelector('h2');
    if (h2) {
      const heading = h2.textContent?.trim() || '';
      if (sectionsToHide.some((text) => heading.includes(text))) {
        (section as HTMLElement).style.display = 'none';
      }
    }
  });
}
