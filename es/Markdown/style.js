import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref, _ref2) {
  var css = _ref.css,
    token = _ref.token,
    isDarkMode = _ref.isDarkMode;
  var _ref2$fontSize = _ref2.fontSize,
    fontSize = _ref2$fontSize === void 0 ? 14 : _ref2$fontSize,
    _ref2$headerMultiple = _ref2.headerMultiple,
    headerMultiple = _ref2$headerMultiple === void 0 ? 0.25 : _ref2$headerMultiple,
    _ref2$marginMultiple = _ref2.marginMultiple,
    marginMultiple = _ref2$marginMultiple === void 0 ? 1 : _ref2$marginMultiple,
    _ref2$lineHeight = _ref2.lineHeight,
    lineHeight = _ref2$lineHeight === void 0 ? 1.6 : _ref2$lineHeight;
  var cyanColor = isDarkMode ? token.cyan9A : token.cyan11A;
  return {
    chat: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        --lobe-markdown-font-size: ", "px;\n        --lobe-markdown-header-multiple: ", ";\n        --lobe-markdown-margin-multiple: ", ";\n        --lobe-markdown-line-height: ", ";\n        --lobe-markdown-border-radius: ", ";\n\n        margin-block: ", "em;\n\n        /* \u89E3\u51B3\u53EA\u6709\u4E00\u4E2A\u5B50\u8282\u70B9\u65F6\u9AD8\u5EA6\u574D\u7F29\u7684\u95EE\u9898 */\n        :first-child:not(:has(*)) {\n          margin-block: 0;\n        }\n\n        ol,\n        ul {\n          li {\n            &::marker {\n              color: ", ";\n            }\n\n            li {\n              &::marker {\n                color: ", ";\n              }\n            }\n          }\n        }\n\n        ul {\n          list-style: unset;\n\n          li {\n            &::before {\n              content: unset;\n              display: unset;\n            }\n          }\n        }\n      "])), fontSize, headerMultiple, marginMultiple, lineHeight, token.borderRadius, marginMultiple * -0.75, cyanColor, token.colorTextSecondary),
    root: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        position: relative;\n        overflow: hidden;\n        max-width: 100%;\n      "])))
  };
});