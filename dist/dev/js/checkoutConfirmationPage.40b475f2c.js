webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _form = __webpack_require__(0);

var _form2 = _interopRequireDefault(_form);

var _swipper = __webpack_require__(3);

var _swipper2 = _interopRequireDefault(_swipper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  (0, _swipper2.default)();
  console.log('this is checkoutConfirmationPage');
});

$('button').on('click', function () {
  (0, _form2.default)();
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var swipper = function swipper() {
    console.log('this is swipper function');
};

exports.default = swipper;

/***/ })
],[2]);