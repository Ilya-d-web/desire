/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/header.js":
/*!*********************************!*\
  !*** ./src/assets/js/header.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    $('.menu__btn').click(function () {\r\n        bodyLock();\r\n        $('.rightside-menu').addClass('fixed');\r\n        $('body').addClass('no-scroll');\r\n    });\r\n    $('.rightside-menu__close').click(function () {\r\n        $('.rightside-menu').removeClass('fixed');\r\n        setTimeout(removeScrollPadding, 400);\r\n    });\r\n    $('.icon-menu').click(function () {\r\n        toggleClassActive();\r\n    });\r\n    $(window).on(\"resize\", function () {\r\n        if (window.matchMedia('(min-width: 768px)').matches) {\r\n            if ($('.icon-menu').hasClass('active')) {\r\n                removeClassActive();\r\n            }\r\n        }\r\n    });//включение скрола при ресайзе\r\n\r\n    function toggleClassActive() {\r\n        $('.icon-menu').toggleClass('active');\r\n        $('.menu__body').toggleClass('active');\r\n        $('body').toggleClass('no-scroll');\r\n    }\r\n    function removeClassActive() {\r\n        $('.icon-menu').removeClass('active');\r\n        $('.menu__body').removeClass('active');\r\n        $('body').removeClass('no-scroll');\r\n    }\r\n    function bodyLock() {\r\n        let lockPaddingValue = window.innerWidth - $('.wrapper').outerWidth() + 'px';\r\n\r\n        $('.lock-padding').css('padding-right', lockPaddingValue);\r\n        $('body').css('padding-right', lockPaddingValue);\r\n    }\r\n    function removeScrollPadding() {\r\n        $('body').removeClass('no-scroll');\r\n        $('body').css('padding-right', '0px');\r\n        $('.lock-padding').css('padding-right', '0px');\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/header.js?");

/***/ }),

/***/ "./src/assets/js/mix.js":
/*!******************************!*\
  !*** ./src/assets/js/mix.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    var mixer = mixitup('.gallery__inner', {\r\n        load: {\r\n            filter: \".living\",\r\n        }\r\n    });\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/mix.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    $('.begin__slider').slick({\r\n        dots: true,\r\n        arrows: false,\r\n        fade: true,\r\n        autoplay: true,\r\n        autoplaySpeed: 5000,\r\n        pauseOnFocus: false,\r\n        pauseOnHover: false,\r\n        pauseOnDotsHover: false,\r\n\r\n    });\r\n\r\n    $('.contact-slick').slick({\r\n        dots: true,\r\n        arrows: false,\r\n        autoplay: true,\r\n        autoplaySpeed: 6000,\r\n        easing: 'ease-in',\r\n        graggable: false,\r\n        lazyLoad: 'progressive',\r\n        slidesToShow: 10,\r\n        slidesToScroll: 10,\r\n        pauseOnFocus: false,\r\n        pauseOnHover: false,\r\n        pauseOnDotsHover: false,\r\n\r\n        responsive: [\r\n            {\r\n                breakpoint: 1800,\r\n                settings: {\r\n                    slidesToShow: 8,\r\n                    slidesToScroll: 8,\r\n                }\r\n            },\r\n            {\r\n                breakpoint: 1450,\r\n                settings: {\r\n                    slidesToShow: 6,\r\n                    slidesToScroll: 6,\r\n                }\r\n            },\r\n            {\r\n                breakpoint: 1080,\r\n                settings: {\r\n                    slidesToShow: 4,\r\n                    slidesToScroll: 4,\r\n                }\r\n            },\r\n            {\r\n                breakpoint: 730,\r\n                settings: {\r\n                    slidesToShow: 3,\r\n                    slidesToScroll: 3,\r\n                }\r\n            },\r\n            {\r\n                breakpoint: 550,\r\n                settings: {\r\n                    slidesToShow: 2,\r\n                    slidesToScroll: 2,\r\n                }\r\n            },\r\n            {\r\n                breakpoint: 400,\r\n                settings: {\r\n                    slidesToShow: 1,\r\n                    slidesToScroll: 1,\r\n                }\r\n            },\r\n        ]\r\n    });\r\n\r\n    $('.post-slider__row').slick({\r\n        adaptiveHeight: true,\r\n        prevArrow: '<button type=\"button\" class=\"slick-prev\"><img src=\"assets/images/arrowPrew-slider.svg\" alt=\"\"></button>',\r\n        nextArrow: '<button type=\"button\" class=\"slick-next\"><img src=\"assets/images/arrowNext-slider.svg\" alt=\"\"></button>',\r\n        pauseOnFocus: false,\r\n        pauseOnHover: false,\r\n        pauseOnDotsHover: false,\r\n        autoplay: true,\r\n        autoplaySpeed: 4000,\r\n        easing: 'ease-in',\r\n        graggable: false,\r\n        lazyLoad: 'progressive',\r\n    });\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/slider.js?");

/***/ }),

/***/ "./src/assets/js/webpForCss.js":
/*!*************************************!*\
  !*** ./src/assets/js/webpForCss.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function testWebP(callback) {\r\n\r\n    var webP = new Image();\r\n    webP.onload = webP.onerror = function () {\r\n        callback(webP.height == 2);\r\n    };\r\n    webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n}\r\n\r\ntestWebP(function (support) {\r\n\r\n    if (support == true) {\r\n        document.querySelector('body').classList.add('webp');\r\n    } else {\r\n        document.querySelector('body').classList.add('no-webp');\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/webpForCss.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/header.js ./src/assets/js/mix.js ./src/assets/js/slider.js ./src/assets/js/webpForCss.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --desire--\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --desire--\\src\\assets\\js\\header.js */\"./src/assets/js/header.js\");\n__webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --desire--\\src\\assets\\js\\mix.js */\"./src/assets/js/mix.js\");\n__webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --desire--\\src\\assets\\js\\slider.js */\"./src/assets/js/slider.js\");\nmodule.exports = __webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --desire--\\src\\assets\\js\\webpForCss.js */\"./src/assets/js/webpForCss.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/header.js_./src/assets/js/mix.js_./src/assets/js/slider.js_./src/assets/js/webpForCss.js?");

/***/ })

/******/ });