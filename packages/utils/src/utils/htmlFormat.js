export function removeHtml(rawString) {
  return String(rawString).replace(/<[^>].*?>/g, '');
}
