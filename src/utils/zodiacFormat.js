/**
 *  由身份证得到生肖
 * @param {*} idCard 
 */
export default function zodiacFormat(idCard) {
  if (!/^\d{4}/.test(idCard)) {
    return null
  }
  const year = idCard.substring(6, 10)
  const zodiac = '猴鸡狗猪鼠牛虎兔龙蛇马羊'
  return zodiac[Number(year) % 12]
}
