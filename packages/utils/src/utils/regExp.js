const rules = {
  Email: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
  Landline: /^((400[0-9]{7})|(800[0-9]{7})|(0[0-9]{2,3}-?[0-9]{7,8})|(1[02][0-9]{3,6})|(9[0-9]{4}))$/,
  Creditcode: /^(\w{15}|\w{18})$/,
  IDCard: /(^([1-9]\d{5}[12]\d{3}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])\d{3}[0-9xX])$)/,
  ValidCode: /^[0-9]{4}$/,
  Phone: /^(?=\d{11}$)^1(?:3\d|4[57]|5[^4\D]|66|7[^249\D]|8\d|9[89])\d{8}$/,
  Website: /^(https?:\/\/)?([\w-]+\.)+[\w]+(:[0-9]+)?(\/[\S]+)?$/,
};

export function regCheck(reg, value) {
  return new RegExp(reg).test(value);
}

// Element Form Validator
export function genValidator(type, msg) {
  if (!rules[type]) throw new Error(`type ${type} not exists!`);

  return (rule, value, callback) => {
    if (!rule.required && !value) {
      callback();
    } else if (!regCheck(RegRule[type], value)) {
      callback(new Error(msg));
    } else {
      callback();
    }
  };
}


export default rules;
