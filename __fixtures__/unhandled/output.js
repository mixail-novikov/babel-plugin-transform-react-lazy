"use strict";

var _interopRequireDefault = require("~/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard3 = require("~/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.App = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(
  require("~/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard")
);

var _react = _interopRequireWildcard3(require("react"));

var _jsxFileName =
  "~/__fixtures__/unhandled/code.js";
const LazyComponent = (0, _react.lazy)(() =>
  Promise.resolve().then(() =>
    (0, _interopRequireWildcard2.default)(require("./LazyComponent"))
  )
);

const App = () => {
  return /*#__PURE__*/ _react.default.createElement(LazyComponent, {
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10,
    },
  });
};

exports.App = App;
