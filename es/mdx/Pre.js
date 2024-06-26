'use client';

import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _excluded = ["fullFeatured", "fileName", "allowChangeLanguage", "language", "children", "className", "style", "icon"],
  _excluded2 = ["language", "children", "className", "style"];
var _templateObject;
import { createStyles } from 'antd-style';
import Highlighter from "../Highlighter";
import Snippet from "../Snippet";
import { FALLBACK_LANG } from "../hooks/useHighlight";
import { jsx as _jsx } from "react/jsx-runtime";
var useStyles = createStyles(function (_ref) {
  var css = _ref.css;
  return {
    container: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    overflow: hidden;\n    margin-block: 1em;\n    border-radius: calc(var(--lobe-markdown-border-radius) * 1px);\n    box-shadow: 0 0 0 1px var(--lobe-markdown-border-color);\n  "])))
  };
});
export var Pre = function Pre(_ref2) {
  var fullFeatured = _ref2.fullFeatured,
    fileName = _ref2.fileName,
    allowChangeLanguage = _ref2.allowChangeLanguage,
    _ref2$language = _ref2.language,
    language = _ref2$language === void 0 ? FALLBACK_LANG : _ref2$language,
    children = _ref2.children,
    className = _ref2.className,
    style = _ref2.style,
    icon = _ref2.icon,
    rest = _objectWithoutProperties(_ref2, _excluded);
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  return /*#__PURE__*/_jsx(Highlighter, _objectSpread(_objectSpread({
    allowChangeLanguage: allowChangeLanguage,
    className: cx(styles.container, className),
    copyButtonSize: {
      blockSize: 28,
      fontSize: 16
    },
    fileName: fileName,
    fullFeatured: fullFeatured,
    icon: icon,
    language: language,
    style: style,
    type: "block"
  }, rest), {}, {
    children: children
  }));
};
export var PreSingleLine = function PreSingleLine(_ref3) {
  var _ref3$language = _ref3.language,
    language = _ref3$language === void 0 ? FALLBACK_LANG : _ref3$language,
    children = _ref3.children,
    className = _ref3.className,
    style = _ref3.style,
    rest = _objectWithoutProperties(_ref3, _excluded2);
  var _useStyles2 = useStyles(),
    cx = _useStyles2.cx,
    styles = _useStyles2.styles;
  return /*#__PURE__*/_jsx(Snippet, _objectSpread(_objectSpread({
    className: cx(styles.container, className),
    "data-code-type": "highlighter",
    language: language,
    style: style,
    type: 'block'
  }, rest), {}, {
    children: children
  }));
};
export default Pre;