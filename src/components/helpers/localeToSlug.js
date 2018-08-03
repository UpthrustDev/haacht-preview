export default function localeToSlug(locale) {
  const parts = locale.split('-');
  if (parts.length !== 2) {
    throw new Error(`Cannot convert locale ${locale} to a slug. Expecting e.g. "nl-BE"`);
  }

  return (parts[1] + parts[0]).toLowerCase();
}
