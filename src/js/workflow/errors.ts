
export function wfError(
  key: string,
  params?: Record<string, string | number>
): string {
  // Simple conversion from camelCase key to a readable English string
  let message = key
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
    .trim();

  // Handle common params like {message}, {page}, {file}
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      message = message.replace(new RegExp(`{{${k}}}`, 'g'), String(v));
      message = message.replace(new RegExp(`{${k}}`, 'g'), String(v));
    });
  }

  return message;
}
