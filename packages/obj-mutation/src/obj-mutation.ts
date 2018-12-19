// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

export interface OptionsTypes {
  clean?: boolean;
  cleanValue?: any;
  [key: string]: any;
}

export interface SchemaTypes {
  [key: string]: {
    format?: any;
    mutate?: any;
    create?: any;
  };
}

const defaultOptions: OptionsTypes = {
  clean: true,
  cleanValue: '_falsy',
};

class ObjMutation {
  [key: string]: any;
  public schema: SchemaTypes;
  public options: OptionsTypes;

  constructor(public _schema: SchemaTypes = {}, public _options: OptionsTypes = {}) {
    this.schema = _schema;
    this.options = (Object as any).assign({}, defaultOptions, _options);
  }

  parse(originObj: { [key: string]: any }): object {
    if (!originObj) return {};

    const newObj: any = (Object as any).assign({}, originObj);

    const originObjKeys = Object.keys(this.schema);
    originObjKeys.forEach((originObjKey) => {
      const { format, mutate, create } = this.schema[originObjKey];
      const originValue = originObj[originObjKey];

      if (!create && !newObj.hasOwnProperty(originObjKey)) return;

      if (mutate) {
        delete newObj[originObjKey];
        Object.keys(mutate).forEach((mutateKey) => {
          newObj[mutateKey] = mutate[mutateKey](originValue);
        });
        return;
      } else if (create) {
        newObj[originObjKey] = create(originObj);
        return;
      } else if (format) {
        newObj[originObjKey] = format(originValue);
      }

      console.log('originObjKey', originValue);
      newObj[originObjKey] = format ? format(originValue) : originValue;
    });
    return this.pipe(newObj);
  }

  private pipe(params: object) {
    const piplineFuncs = ['clean'].filter((p) => this.options[p]);

    const prettyParams = piplineFuncs.reduce((result, nextPip) => {
      if (this.options[nextPip] && this[nextPip]) {
        return this[nextPip](result);
      }

      return result;
    }, params);

    return Object.keys(prettyParams).length ? prettyParams : {};
  }

  private clean(params: any) {
    const niceParams: { [key: string]: any } = {};
    Object.keys(params).forEach((key) => {
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

export default ObjMutation;
