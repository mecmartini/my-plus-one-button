"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const MyPlusOneButton = props => {
  const [num, setNum] = (0, _react.useState)(1);

  const handleClick = e => {
    setNum(num + 1);
  };

  return /*#__PURE__*/_react.React.createElement(_react.React.Fragment, null, /*#__PURE__*/_react.React.createElement("h1", null, num), /*#__PURE__*/_react.React.createElement("button", {
    className: "btn btn-success",
    onClick: handleClick
  }, "Plus One"));
};

var _default = MyPlusOneButton;
exports.default = _default;