// TODO: add cloneDeep, omit
const defaultOptions = {
  clean: true,
  cleanValue: '_falsy',
};
export default class Mutation {
  constructor(schema, options = {}) {
    this.schema = schema;
    this.options = Object.assign(defaultOptions, options);
    this.params = {};
  }

  parse(originObj) {
    if (!originObj) return {}

    let newObj = Object.assign({}, originObj)
    const originObjKeys = Object.keys(this.schema)
    originObjKeys.forEach((originObjKey) => {
      delete newObj[originObjKey]
      const originValue = originObj[originObjKey]

      const { format, mutate, create } = this.schema[originObjKey]

      // mutate：一个字段拆分为两个字段，原字段不保留；
      if (mutate) {
        delete newObj[originObjKey]
        Object.keys(mutate).forEach((mutateKey) => {
          newObj[mutateKey] = mutate[mutateKey](originValue)
        })
        return
      } else if (create) {
        /**
         * create: 剔除一个或多个字段，生成一个新字段；
         * object[createFn(values)]: function
         */
        newObj[originObjKey] = create(originObj)
        return
      }

      newObj[originObjKey] = format ? format(originValue) : originValue
    })
    this.params = { ...newObj }
    return this.pipe()
  }

  pipe() {
    const piplineFuncs = ['clean'].filter((p) => this.options[p]);

    const prettyParams = piplineFuncs.reduce((result, nextPip) => {
      if (this.options[nextPip] && this[nextPip]) {
        return this[nextPip](result);
      }

      return result;
    }, this.params);

    return Object.keys(prettyParams).length ? prettyParams : {};
  }

  /**
   * 对params处理的流水线函数。
   * clean: 剔除value为空值的键对值;
   */
  clean(params) {
    const niceParams = {};
    Object.keys(params).forEach((key) => {
      // 是否为自定义过滤字段，若cleanValue为undefined，则过滤掉一切Falsy值
      const isTruth = this.options.cleanValue === '_falsy' ? false : true;
      if (isTruth) {
        if (params[key] !== this.options.cleanValue) {
          niceParams[key] = params[key];
        }
      } else if (params[key]) {
        niceParams[key] = params[key];
      }
    });
    return niceParams;
  }
}
