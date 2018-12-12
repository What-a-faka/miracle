(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.miracle = {})));
}(this, (function (exports) { 'use strict';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");

  return typeof key === "symbol" ? key : String(key);
}

function _addElementPlacement(element, placements, silent) {
  var keys = placements[element.placement];

  if (!silent && keys.indexOf(element.key) !== -1) {
    throw new TypeError("Duplicated element (" + element.key + ")");
  }

  keys.push(element.key);
}

function _fromElementDescriptor(element) {
  var obj = {
    kind: element.kind,
    key: element.key,
    placement: element.placement,
    descriptor: element.descriptor
  };
  var desc = {
    value: "Descriptor",
    configurable: true
  };
  Object.defineProperty(obj, Symbol.toStringTag, desc);
  if (element.kind === "field") obj.initializer = element.initializer;
  return obj;
}

function _toElementDescriptors(elementObjects) {
  if (elementObjects === undefined) return;
  return _toArray(elementObjects).map(function (elementObject) {
    var element = _toElementDescriptor(elementObject);

    _disallowProperty(elementObject, "finisher", "An element descriptor");

    _disallowProperty(elementObject, "extras", "An element descriptor");

    return element;
  });
}

function _toElementDescriptor(elementObject) {
  var kind = String(elementObject.kind);

  if (kind !== "method" && kind !== "field") {
    throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
  }

  var key = _toPropertyKey(elementObject.key);

  var placement = String(elementObject.placement);

  if (placement !== "static" && placement !== "prototype" && placement !== "own") {
    throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
  }

  var descriptor = elementObject.descriptor;

  _disallowProperty(elementObject, "elements", "An element descriptor");

  var element = {
    kind: kind,
    key: key,
    placement: placement,
    descriptor: Object.assign({}, descriptor)
  };

  if (kind !== "field") {
    _disallowProperty(elementObject, "initializer", "A method descriptor");
  } else {
    _disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");

    _disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");

    _disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");

    element.initializer = elementObject.initializer;
  }

  return element;
}

function _toElementFinisherExtras(elementObject) {
  var element = _toElementDescriptor(elementObject);

  var finisher = _optionalCallableProperty(elementObject, "finisher");

  var extras = _toElementDescriptors(elementObject.extras);

  return {
    element: element,
    finisher: finisher,
    extras: extras
  };
}

function _fromClassDescriptor(elements) {
  var obj = {
    kind: "class",
    elements: elements.map(_fromElementDescriptor)
  };
  var desc = {
    value: "Descriptor",
    configurable: true
  };
  Object.defineProperty(obj, Symbol.toStringTag, desc);
  return obj;
}

function _toClassDescriptor(obj) {
  var kind = String(obj.kind);

  if (kind !== "class") {
    throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
  }

  _disallowProperty(obj, "key", "A class descriptor");

  _disallowProperty(obj, "placement", "A class descriptor");

  _disallowProperty(obj, "descriptor", "A class descriptor");

  _disallowProperty(obj, "initializer", "A class descriptor");

  _disallowProperty(obj, "extras", "A class descriptor");

  var finisher = _optionalCallableProperty(obj, "finisher");

  var elements = _toElementDescriptors(obj.elements);

  return {
    elements: elements,
    finisher: finisher
  };
}

function _disallowProperty(obj, name, objectType) {
  if (obj[name] !== undefined) {
    throw new TypeError(objectType + " can't have a ." + name + " property.");
  }
}

function _optionalCallableProperty(obj, name) {
  var value = obj[name];

  if (value !== undefined && typeof value !== "function") {
    throw new TypeError("Expected '" + name + "' to be a function");
  }

  return value;
}

/**
 * 手机打码中间四位数
 * @param {stirng} phone 
 * @returns {string}
 */
function mosaicPhone(phone) {
  if (phone && phone.length > 7) {
    return phone.replace(/^(.*).{4}(.{4})$/, '$1****$2');
  }

  return phone.replace(/^(.{4})(.*)$/, '****$2');
}
function mosaicEmail(email) {
  if (email) {
    return email.replace(/^(.{1}).*(.{1}@{1})/, '$1****$2');
  }

  return email;
}
/** 模糊身份证
* 算法：展示身份证好前 6 位和后 4 位，中间位数使用 '*' 号替代
*/

function mosaicIdNumber(idNumber) {
  if (idNumber) {
    var _idNumber$match = idNumber.match(/(.{6})(.*)(.{4})/),
        _idNumber$match2 = _slicedToArray(_idNumber$match, 4),
        prefix = _idNumber$match2[1],
        middle = _idNumber$match2[2],
        suffix = _idNumber$match2[3];

    var middleMosaic = middle.replace(/./g, '*');
    return "".concat(prefix).concat(middleMosaic).concat(suffix);
  }

  return idNumber;
}
/*
 * 电话号码和邮箱打码
*/

var fuzzDataFilter = function fuzzDataFilter(key) {
  var value = '';
  var emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;

  if (key) {
    if (emailReg.test(key)) {
      value = key.replace(/^(.{1}).*(.{1}@{1})/, '$1****$2') || '';
    } else if (key.length > 7) {
      value = key.replace(/^(.*).{4}(.{4})$/, '$1****$2') || '';
    } else {
      value = key.replace(/^(.{4})(.*)$/, '****$2') || '';
    }
  }

  return value;
}; // 模糊姓名，只保留姓

function mosaicName(name) {
  if (!name || name.length < 2) return name || '';
  return "".concat(name.charAt(0)).concat(name.slice(1).replace(/\S/g, '*'));
}

var mosaicFormat = Object.freeze({
	mosaicPhone: mosaicPhone,
	mosaicEmail: mosaicEmail,
	mosaicIdNumber: mosaicIdNumber,
	fuzzDataFilter: fuzzDataFilter,
	mosaicName: mosaicName
});

/**
 *  由身份证得到生肖
 * @param {*} idCard 
 */
function zodiacFormat(idCard) {
  if (!/^\d{4}/.test(idCard)) {
    return null;
  }

  var year = idCard.substring(6, 10);
  var zodiac = '猴鸡狗猪鼠牛虎兔龙蛇马羊';
  return zodiac[Number(year) % 12];
}

exports.mosaicFormat = mosaicFormat;
exports.zodiacFormat = zodiacFormat;

Object.defineProperty(exports, '__esModule', { value: true });

})));
