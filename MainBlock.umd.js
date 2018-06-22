(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MainBlock"] = factory(require("vue"));
	else
		root["MainBlock"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_lRwf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/whu":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NHnr");


/***/ }),

/***/ "2p1q":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("lDLk");
var createDesc = __webpack_require__("fU25");
module.exports = __webpack_require__("bUqO") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "7gX0":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "BbyF":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("oeih");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "D0R9":
/***/ (function(module, exports) {

module.exports = [["iPhone",[["4",[["Замена экрана модулем  <font color='red'>+ защита в подарок</font>","1700 руб. <strike><font color='red'>2200 руб.</font></strike>"],["Замена стекла  <font color='red'>+ защита в подарок</font>","1200 руб. <strike><font color='red'>1600 руб.</font></strike>"],["Замена динамиков","1200 руб."],["Замена аккумулятора","1400 руб."],["Замена кнопки включения","1400 руб."],["Замена кнопки Домой","1200 руб."],["Замена задней камеры","1200 руб."],["Замена передней камеры","1200 руб."],["Замена разъема зарядки","1200 руб."],["Замена задней крышки","900 руб."],["Замена корпуса","2000 руб."],["Замена слота наушников","1400 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/4new.png"]]],["4S",[["Замена экрана модулем  <font color='red'>+ защита в подарок</font>","1700 руб. <strike><font color='red'>2200 руб.</font></strike>"],["Замена стекла  <font color='red'>+ защита в подарок</font>","1200 руб. <strike><font color='red'>1600 руб.</font></strike>"],["Замена динамиков","1200 руб."],["Замена аккумулятора","1400 руб."],["Замена кнопки включения","1400 руб."],["Замена кнопки Домой","1200 руб."],["Замена задней камеры","1200 руб."],["Замена передней камеры","1200 руб."],["Замена разъема зарядки","1200 руб."],["Замена задней крышки","900 руб."],["Замена корпуса","2000 руб."],["Замена слота наушников","1400 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/4new.png"]]],["5",[["Замена экрана модулем  <font color='red'>+ защита в подарок</font>","1800 руб. <strike><font color='red'>2200 руб.</font></strike>"],["Замена стекла  <font color='red'>+ защита в подарок</font>","1400 руб. <strike><font color='red'>1800 руб.</font></strike>"],["Замена динамиков","1400 руб."],["Замена аккумулятора","1600 руб."],["Замена кнопки включения","1400 руб."],["Замена кнопки Домой","1400 руб."],["Замена задней камеры","1400 руб."],["Замена передней камеры","1400 руб."],["Замена разъема зарядки","1400 руб."],["Замена корпуса","2800 руб."],["Замена слота наушников","1400 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/5new.png"]]],["5S",[["Замена экрана модулем  <font color='red'>+ защита в подарок</font>","1800 руб. <strike><font color='red'>2200 руб.</font></strike>"],["Замена стекла  <font color='red'>+ защита в подарок</font>","1400 руб. <strike><font color='red'>1800 руб.</font></strike>"],["Замена динамиков","1400 руб."],["Замена аккумулятора","1600 руб."],["Замена кнопки включения","1400 руб."],["Замена кнопки Домой","1400 руб."],["Замена задней камеры","1400 руб."],["Замена передней камеры","1400 руб."],["Замена разъема зарядки","1400 руб."],["Замена корпуса","2800 руб."],["Замена слота наушников","1400 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/5snew.png"]]],["5C",[["Замена экрана модулем  <font color='red'>+ защита в подарок</font>","1800 руб. <strike><font color='red'>2200 руб.</font></strike>"],["Замена стекла  <font color='red'>+ защита в подарок</font>","1400 руб. <strike><font color='red'>1800 руб.</font></strike>"],["Замена динамиков","1400 руб."],["Замена аккумулятора","1600 руб."],["Замена кнопки включения","1400 руб."],["Замена кнопки Домой","1400 руб."],["Замена задней камеры","1400 руб."],["Замена передней камеры","1400 руб."],["Замена разъема зарядки","1400 руб."],["Замена корпуса","2800 руб."],["Замена слота наушников","1400 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/5snew.png"]]],["SE",[["Замена экрана модулем  <font color='red'>+ защита в подарок</font>","1800 руб. <strike><font color='red'>2200 руб.</font></strike>"],["Замена стекла  <font color='red'>+ защита в подарок</font>","1400 руб. <strike><font color='red'>1800 руб.</font></strike>"],["Замена динамиков","1400 руб."],["Замена аккумулятора","1600 руб."],["Замена кнопки включения","1400 руб."],["Замена кнопки Домой","1400 руб."],["Замена задней камеры","1400 руб."],["Замена передней камеры","1400 руб."],["Замена разъема зарядки","1400 руб."],["Замена корпуса","2800 руб."],["Замена слота наушников","1400 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/5snew.png"]]],["6",[["Замена экрана модулем  <font color='red'>+ защита в подарок</font>","2500 руб. <strike><font color='red'>3200 руб.</font></strike>"],["Замена стекла  <font color='red'>+ защита в подарок</font>","2900 руб. <strike><font color='red'>3400 руб.</font></strike>"],["Замена динамиков","1400 руб."],["Замена аккумулятора","1600 руб."],["Замена кнопки включения","1600 руб."],["Замена кнопки Домой","1600 руб."],["Замена задней камеры","1600 руб."],["Замена передней камеры","1600 руб."],["Замена разъема зарядки","1600 руб."],["Замена корпуса","3200 руб."],["Замена слота наушников","1600 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/6new.png"]]],["6+",[["Замена экрана модулем  <font color='red'>+ защита в подарок</font>","3000 руб. <strike><font color='red'>4600 руб.</font></strike>"],["Замена стекла  <font color='red'>+ защита в подарок</font>","3400 руб. <strike><font color='red'>3800 руб.</font></strike>"],["Замена динамиков","1600 руб."],["Замена аккумулятора","1800 руб."],["Замена кнопки включения","1600 руб."],["Замена кнопки Домой","1600 руб."],["Замена задней камеры","1800 руб."],["Замена передней камеры","1800 руб."],["Замена разъема зарядки","1600 руб."],["Замена корпуса","4000 руб."],["Замена слота наушников","1600 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/6new.png"]]],["6S",[["Замена экрана модулем  <font color='red'>+ защита в подарок</font>","3500 руб. <strike><font color='red'>4800 руб.</font></strike>"],["Замена стекла  <font color='red'>+ защита в подарок</font>","4600 руб. <strike><font color='red'>5200 руб.</font></strike>"],["Замена динамиков","1800 руб."],["Замена аккумулятора","1900 руб."],["Замена кнопки включения","1900 руб."],["Замена кнопки Домой","1900 руб."],["Замена задней камеры","1800 руб."],["Замена передней камеры","1900 руб."],["Замена разъема зарядки","1800 руб."],["Замена корпуса","4000 руб."],["Замена слота наушников","1900 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/6new.png"]]],["6S+",[["Замена экрана модулем  <font color='red'>+ защита в подарок</font>","4000 руб. <strike><font color='red'>5200 руб.</font></strike>"],["Замена стекла  <font color='red'>+ защита в подарок</font>","5900 руб. <strike><font color='red'>6400 руб.</font></strike>"],["Замена динамиков","1900 руб."],["Замена аккумулятора","1900 руб."],["Замена кнопки включения","1900 руб."],["Замена кнопки Домой","1900 руб."],["Замена задней камеры","1900 руб."],["Замена передней камеры","1800 руб."],["Замена разъема зарядки","1800 руб."],["Замена корпуса","4000 руб."],["Замена слота наушников","1900 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/6new.png"]]],["7",[["Замена экрана модулем  <font color='red'>+ защита в подарок</font>","4000 руб. <strike><font color='red'>6800 руб.</font></strike>"],["Замена стекла  <font color='red'>+ защита в подарок</font>","5200 руб. <strike><font color='red'>6800 руб.</font></strike>"],["Замена динамиков","1900 руб."],["Замена аккумулятора","1900 руб."],["Замена кнопки включения","1900 руб."],["Замена кнопки Домой","1900 руб."],["Замена задней камеры","1900 руб."],["Замена передней камеры","1900 руб."],["Замена разъема зарядки","1800 руб."],["Замена корпуса","4000 руб."],["Замена слота наушников","1900 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/7new.png"]]],["7+",[["Замена экрана модулем  <font color='red'>+ защита в подарок</font>","4400 руб. <strike><font color='red'>6200 руб.</font></strike>"],["Замена стекла  <font color='red'>+ защита в подарок</font>","5600 руб. <strike><font color='red'>6800 руб.</font></strike>"],["Замена динамиков","1900 руб."],["Замена аккумулятора","1900 руб."],["Замена кнопки включения","1900 руб."],["Замена кнопки Домой","1900 руб."],["Замена задней камеры","1900 руб."],["Замена передней камеры","1900 руб."],["Замена разъема зарядки","1800 руб."],["Замена корпуса","4000 руб."],["Замена слота наушников","1900 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/7new.png"]]],["8",[["Замена экрана модулем  <font color='red'>+ защита в подарок</font>","4400 руб. <strike><font color='red'>6800 руб.</font></strike>"],["Замена стекла  <font color='red'>+ защита в подарок</font>","5200 руб. <strike><font color='red'>7200 руб.</font></strike>"],["Замена динамиков","1900 руб."],["Замена аккумулятора","1900 руб."],["Замена кнопки включения","1900 руб."],["Замена кнопки Домой","1900 руб."],["Замена задней камеры","1900 руб."],["Замена передней камеры","1900 руб."],["Замена разъема зарядки","1800 руб."],["Замена корпуса","4000 руб."],["Замена слота наушников","1900 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/8new.png"]]],["8+",[["Замена экрана модулем  <font color='red'>+ защита в подарок</font>","4800 руб. <strike><font color='red'>7400 руб.</font></strike>"],["Замена стекла  <font color='red'>+ защита в подарок</font>","5600 руб. <strike><font color='red'>7600 руб.</font></strike>"],["Замена динамиков","1900 руб."],["Замена аккумулятора","1900 руб."],["Замена кнопки включения","1900 руб."],["Замена кнопки Домой","1900 руб."],["Замена задней камеры","1900 руб."],["Замена передней камеры","1900 руб."],["Замена разъема зарядки","1800 руб."],["Замена корпуса","4000 руб."],["Замена слота наушников","1900 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/8new.png"]]]]],["iPad",[["iPad",[["Замена тачскрина","2800 руб."],["Замена дисплея","3200 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/ipad12new.png"]]],["iPad 2",[["Замена тачскрина","2800 руб."],["Замена дисплея","3200 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/ipad12new.png"]]],["iPad 3",[["Замена тачскрина","2800 руб."],["Замена дисплея","3200 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/ipad3new.png"]]],["iPad 4",[["Замена тачскрина","2800 руб."],["Замена дисплея","3200 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/ipad4new.png"]]],["iPad Mini",[["Замена тачскрина","2800 руб."],["Замена дисплея","3200 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/ipad12new.png"]]],["iPad Mini 2",[["Замена тачскрина","2800 руб."],["Замена дисплея","3200 руб."],["Прошивка","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/ipad12new.png"]]]]],["Android",[["1",[["Восстановление USB разъёма","от 600 руб."],["Замена тачскрина","от 800 руб."],["Замена дисплейного модуля","от 800 руб."],["Восстановление ПО","от 800 руб."],["Диагностика","бесплатно"],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/andr.png"]]]]],["ПК и ноутбуки",[["ПК",[["Восстановление Windows","900 руб."],["Замена блока питания","900 руб."],["Замена гнезда зарядки","1200 руб."],["Замена портов USB","1200 руб."],["Подборка и замена оперативной памяти","700 руб."],["Подбор и замена жёсткого диска","800 руб."],["Перенос данных с жёсткого диска","1000 руб."],["_image","http://xn--80aao0acxcdchg.xn--p1ai/img/pknew.png"]]]]]]

/***/ }),

/***/ "DIVP":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("UKM+");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "Ds5P":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("OzIq");
var core = __webpack_require__("7gX0");
var hide = __webpack_require__("2p1q");
var redefine = __webpack_require__("R3AP");
var ctx = __webpack_require__("rFzY");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "FryR":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("/whu");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "LhTa":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("rFzY");
var IObject = __webpack_require__("Q6Nf");
var toObject = __webpack_require__("FryR");
var toLength = __webpack_require__("BbyF");
var asc = __webpack_require__("plSV");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external___commonjs___vue___commonjs2___vue___root___Vue__ = __webpack_require__("lRwf");
var external___commonjs___vue___commonjs2___vue___root___Vue___default = /*#__PURE__*/__webpack_require__.n(external___commonjs___vue___commonjs2___vue___root___Vue__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("WpTh");
var es6_array_find_default = /*#__PURE__*/__webpack_require__.n(es6_array_find);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/travis/build/app4site/mastersmart/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MainBlock.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MainBlock = ({
  props: {
    price: Array
  },
  data: function data() {
    return {
      selectedMark: this.price[0],
      selectedModel: null
    };
  },
  computed: {
    currImage: function currImage() {
      var arr = this.selectedModel[1].find(function (j) {
        return j[0] === '_image';
      });
      return arr && arr[1];
    }
  },
  watch: {
    selectedMark: {
      immediate: true,
      handler: function handler() {
        this.selectedModel = this.selectedMark[1][0];
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-28014b5e","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug&optionsId=1!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MainBlock.vue
var MainBlock_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root",class:{mobile: _vm.mobile}},[_c('div',{staticClass:"marks"},_vm._l((_vm.price),function(mark){return _c('span',{staticClass:"mark",class:{selected: _vm.selectedMark === mark},on:{"click":function($event){_vm.selectedMark = mark}}},[_vm._v(_vm._s(mark[0]))])})),(_vm.selectedMark[1].length > 1)?_c('div',{staticClass:"models"},_vm._l((_vm.selectedMark[1]),function(model){return _c('span',{staticClass:"model",class:{selected: _vm.selectedModel === model},on:{"click":function($event){_vm.selectedModel = model}}},[_vm._v(_vm._s(model[0]))])})):_vm._e(),_c('div',{staticClass:"jobs-n-image"},[_c('div',{staticClass:"jobs"},_vm._l((_vm.selectedModel[1]),function(job){return (job[0] !== '_image')?_c('div',{staticClass:"job"},[_c('div',{staticClass:"name",domProps:{"innerHTML":_vm._s(job[0])}}),_c('span',{staticClass:"price",domProps:{"innerHTML":_vm._s(job[1])}}),_c('div',{staticClass:"red"})]):_vm._e()})),(!_vm.mobile && _vm.currImage)?_c('div',{staticClass:"image"},[_c('img',{attrs:{"src":_vm.currImage}})]):_vm._e()])])}
var staticRenderFns = []

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/MainBlock.vue
function injectStyle (context) {
  __webpack_require__("qqMV")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-28014b5e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  MainBlock,
  MainBlock_render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_MainBlock = (Component.exports);

// EXTERNAL MODULE: ./src/price.json
var price = __webpack_require__("D0R9");
var price_default = /*#__PURE__*/__webpack_require__.n(price);

// CONCATENATED MODULE: ./src/main.js



external___commonjs___vue___commonjs2___vue___root___Vue___default.a.config.productionTip = false;

function detectMobile() {
  return typeof window.isMobile === 'undefined' ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) : window.isMobile;
}

external___commonjs___vue___commonjs2___vue___root___Vue___default.a.mixin({
  data: function data() {
    return {
      mobile: detectMobile()
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener('resize', function () {
      return _this.mobile = detectMobile();
    });
  }
});
var app = new external___commonjs___vue___commonjs2___vue___root___Vue___default.a({
  render: function render(h) {
    return h(components_MainBlock, {
      props: {
        price: price_default.a
      }
    });
  }
});
if (false) window.MainBlock = app;
/* harmony default export */ var main = __webpack_exports__["default"] = (app);

/***/ }),

/***/ "OzIq":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "Q6Nf":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("ydD5");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "R3AP":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("OzIq");
var hide = __webpack_require__("2p1q");
var has = __webpack_require__("WBcL");
var SRC = __webpack_require__("ulTY")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("7gX0").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "RhFG":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("kkCw")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("2p1q")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "UKM+":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "VWgF":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("OzIq");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "WBcL":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "WpTh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("Ds5P");
var $find = __webpack_require__("LhTa")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("RhFG")(KEY);


/***/ }),

/***/ "XO1R":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("ydD5");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "XSOZ":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "bUqO":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("zgIt")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "boo2":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("UKM+");
var isArray = __webpack_require__("XO1R");
var SPECIES = __webpack_require__("kkCw")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "fU25":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "jhxf":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("UKM+");
var document = __webpack_require__("OzIq").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "kkCw":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("VWgF")('wks');
var uid = __webpack_require__("ulTY");
var Symbol = __webpack_require__("OzIq").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "lDLk":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("DIVP");
var IE8_DOM_DEFINE = __webpack_require__("xZa+");
var toPrimitive = __webpack_require__("s4j0");
var dP = Object.defineProperty;

exports.f = __webpack_require__("bUqO") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "lRwf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lRwf__;

/***/ }),

/***/ "oeih":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "plSV":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("boo2");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "qqMV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rFzY":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("XSOZ");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "s4j0":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("UKM+");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "ulTY":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "xZa+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("bUqO") && !__webpack_require__("zgIt")(function () {
  return Object.defineProperty(__webpack_require__("jhxf")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ydD5":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "zgIt":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=MainBlock.umd.js.map