'use client';

import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["color", "filetype", "type", "size", "style", "variant"];
import { useTheme } from 'antd-style';
import { memo, useMemo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var FileTypeIcon = /*#__PURE__*/memo(function (_ref) {
  var color = _ref.color,
    filetype = _ref.filetype,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'file' : _ref$type,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 48 : _ref$size,
    style = _ref.style,
    variant = _ref.variant,
    rest = _objectWithoutProperties(_ref, _excluded);
  var theme = useTheme();
  var fontSize = useMemo(function () {
    if (filetype && filetype.length > 3) {
      return 24 / (4 + (filetype.length - 3));
    }
    return 6;
  }, [filetype]);
  var isMono = variant === 'mono';
  var iconColor = isMono ? theme.isDarkMode ? theme.colorFill : theme.colorBgContainer : color || theme.geekblue;
  if (type === 'file') return /*#__PURE__*/_jsxs("svg", _objectSpread(_objectSpread({
    height: size,
    style: _objectSpread({
      flex: 'none',
      lineHeight: 1
    }, style),
    viewBox: "0 0 24 24",
    width: size,
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("path", {
      d: "M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6z",
      fill: iconColor
    }), /*#__PURE__*/_jsx("path", {
      d: "M14 2l6 6h-4a2 2 0 01-2-2V2z",
      fill: isMono ? theme.colorFill : '#fff',
      fillOpacity: ".5"
    }), filetype && /*#__PURE__*/_jsx("text", {
      fill: isMono ? theme.colorTextSecondary : '#fff',
      fontSize: fontSize,
      fontWeight: "bold",
      textAnchor: "middle",
      x: "50%",
      y: "70%",
      children: filetype.toUpperCase()
    }), /*#__PURE__*/_jsx("path", {
      d: "M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6z",
      fill: 'transparent',
      stroke: theme.colorFillSecondary,
      strokeWidth: 0.5
    })]
  }));
  return /*#__PURE__*/_jsxs("svg", _objectSpread(_objectSpread({
    height: size,
    style: _objectSpread({
      flex: 'none',
      lineHeight: 1
    }, style),
    viewBox: "0 0 24 24",
    width: size,
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("path", {
      d: "M10.46 5.076l-.92-.752A1.446 1.446 0 008.626 4H3.429c-.38 0-.743.147-1.01.41A1.386 1.386 0 002 5.4v13.2c0 .371.15.727.418.99.268.262.632.41 1.01.41h17.143c.38 0 .743-.148 1.01-.41.268-.263.419-.619.419-.99V6.8c0-.371-.15-.727-.418-.99a1.444 1.444 0 00-1.01-.41h-9.198c-.334 0-.657-.115-.914-.324z",
      fill: iconColor,
      stroke: theme.colorFillSecondary,
      strokeWidth: 0.5
    }), filetype && /*#__PURE__*/_jsx("text", {
      fill: isMono ? theme.colorTextSecondary : '#fff',
      fontSize: fontSize,
      fontWeight: "bold",
      textAnchor: "middle",
      x: '50%',
      y: "70%",
      children: filetype.toUpperCase()
    })]
  }));
});
export default FileTypeIcon;