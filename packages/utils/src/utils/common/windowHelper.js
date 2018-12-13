export function windowClose() {
  window.opener = null
  window.open('', '_self')
  window.close()
}
