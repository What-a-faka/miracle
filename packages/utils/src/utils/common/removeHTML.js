export default function removeHTML(rawString) {
  return String(rawString).replace(/<[^>].*?>/g, '')
}
