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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//VARIABLES\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\n\nvar input1 = document.getElementById('handler1'); //count of dots\nvar input2 = document.getElementById('handler2'); //radius\n\nvar w = window.innerWidth;\nvar h = window.innerHeight;\n\nvar radius = 200;\nvar x = void 0,\n    y = void 0;\nvar time = 0;\n\nvar dot = input1.value;\nvar count = input2.value;\n\ncanvas.width = w;\ncanvas.height = h;\n\ninput1.addEventListener('input', function () {\n  return dot = input1.value;\n});\ninput2.addEventListener('input', function () {\n  return count = input2.value;\n});\n\nvar getArc = function getArc(radius, fill, displacement) {\n\n  ctx.fillStyle = fill;\n  ctx.lineCap = 'round';\n  ctx.lineJoin = 'round';\n  ctx.beginPath();\n\n  for (var i = 0; i <= dot; i++) {\n\n    x = w / 2 + (radius + 90 * Math.cos(i * 2 * Math.PI / dot * count + displacement)) * Math.cos(i * 2 * Math.PI / dot);\n    y = h / 2 + (radius + 90 * Math.cos(i * 2 * Math.PI / dot * count + displacement)) * Math.sin(i * 2 * Math.PI / dot);\n\n    if (i === 0) {\n      ctx.moveTo(x, y);\n    } else {\n      ctx.lineTo(x, y);\n    }\n  }\n  ctx.closePath();\n\n  ctx.fill();\n};\n\nvar draw = function draw() {\n  time++;\n\n  ctx.clearRect(0, 0, w, h);\n\n  for (var j = 0; j < 10; j++) {\n    var fill = j % 2 ? '#b6c9f9' : '#4b62a4';\n    getArc(200 - j * 10, fill, j + j * time / 100);\n  }\n};\nvar showMagic = function showMagic() {\n  draw();\n  window.requestAnimationFrame(showMagic);\n};\n\nshowMagic();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vVkFSSUFCTEVTXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbmRsZXIxJyk7IC8vY291bnQgb2YgZG90c1xuY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbmRsZXIyJyk7IC8vcmFkaXVzXG5cbmxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG5sZXQgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxubGV0IHJhZGl1cyA9IDIwMDtcbmxldCB4LCB5O1xubGV0IHRpbWUgPSAwO1xuXG5sZXQgZG90ID0gaW5wdXQxLnZhbHVlO1xubGV0IGNvdW50ID0gaW5wdXQyLnZhbHVlO1xuXG5jYW52YXMud2lkdGggPSB3O1xuY2FudmFzLmhlaWdodCA9IGg7XG5cbmlucHV0MS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IGRvdCA9IGlucHV0MS52YWx1ZSk7XG5pbnB1dDIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBjb3VudCA9IGlucHV0Mi52YWx1ZSk7XG5cblxuXG5jb25zdCBnZXRBcmMgPSAocmFkaXVzLCBmaWxsLCBkaXNwbGFjZW1lbnQpID0+IHtcblxuICBjdHguZmlsbFN0eWxlID0gZmlsbDtcbiAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICBjdHgubGluZUpvaW4gPSAncm91bmQnO1xuICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZG90OyBpKyspIHtcblxuICAgIHggPSAodyAvIDIpICsgKHJhZGl1cyArIDkwICogTWF0aC5jb3MoKGkgKiAyICogTWF0aC5QSSAvIGRvdCkgKiBjb3VudCArIGRpc3BsYWNlbWVudCkpICogTWF0aC5jb3MoaSAqIDIgKiBNYXRoLlBJIC8gZG90KTtcbiAgICB5ID0gKGggLyAyKSArIChyYWRpdXMgKyA5MCAqIE1hdGguY29zKChpICogMiAqIE1hdGguUEkgLyBkb3QpICogY291bnQgKyBkaXNwbGFjZW1lbnQpKSAqIE1hdGguc2luKGkgKiAyICogTWF0aC5QSSAvIGRvdCk7XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICB9XG4gIH1cbiAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gIGN0eC5maWxsKCk7XG59O1xuXG5cblxuY29uc3QgZHJhdyA9ICgpID0+IHtcbiAgdGltZSsrO1xuXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG5cbiAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgbGV0IGZpbGwgPSAoaiAlIDIpID8gJyNiNmM5ZjknIDogJyM0YjYyYTQnO1xuICAgIGdldEFyYygyMDAgLSBqICogMTAsIGZpbGwsIGogKyBqICogdGltZSAvIDEwMCk7XG4gIH1cbn07XG5sZXQgc2hvd01hZ2ljID0gKCkgPT4ge1xuICBkcmF3KCk7XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2hvd01hZ2ljKTtcbn07XG5cblxuc2hvd01hZ2ljKCk7XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });