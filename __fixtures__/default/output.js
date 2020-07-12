"use strict";

var _interopRequireDefault = require("~/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.App = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(
  require("~/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard")
);

var _LazyComponent2 = _interopRequireDefault(require("./LazyComponent"));

var _react = _interopRequireDefault(require("react"));

var _jsxFileName =
  "~/__fixtures__/default/code.js";

const App = () => {
  return /*#__PURE__*/ _react.default.createElement(_LazyComponent2.default, {
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10,
    },
  });
};

exports.App = App;
