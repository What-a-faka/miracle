/**
 * 手机打码中间四位数
 * @param {stirng} phone 
 * @returns {string}
 */
export function mosaicPhone(phone) {
  if (phone && phone.length > 7) {
    return phone.replace(/^(.*).{4}(.{4})$/, '$1****$2')
  }
  return phone.replace(/^(.{4})(.*)$/, '****$2')
}

export function mosaicEmail(email) {
  if (email) {
    return email.replace(/^(.{1}).*(.{1}@{1})/, '$1****$2')
  }
  return email
}

/** 模糊身份证
* 算法：展示身份证好前 6 位和后 4 位，中间位数使用 '*' 号替代
*/
export function mosaicIdNumber(idNumber) {
  if (idNumber) {
    const [, prefix, middle, suffix] = idNumber.match(/(.{6})(.*)(.{4})/)
    const middleMosaic = middle.replace(/./g, '*')
    return `${prefix}${middleMosaic}${suffix}`
  }
  return idNumber
}

/*
 * 电话号码和邮箱打码
*/
export const fuzzDataFilter = (key) => {
  let value = ''
  const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  if (key) {
    if (emailReg.test(key)) {
      value = key.replace(/^(.{1}).*(.{1}@{1})/, '$1****$2') || ''
    } else if (key.length > 7) {
      value = key.replace(/^(.*).{4}(.{4})$/, '$1****$2') || ''
    } else {
      value = key.replace(/^(.{4})(.*)$/, '****$2') || ''
    }
  }
  return value
}

// 模糊姓名，只保留姓
export function mosaicName(name) {
  if (!name || name.length < 2) return name || ''
  return `${name.charAt(0)}${name.slice(1).replace(/\S/g, '*')}`
}
