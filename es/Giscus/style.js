import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import { css } from 'antd-style';
import { readableColor, rgba } from 'polished';
import { colorScales } from "../styles/colors/colors";
export var genStyles = function genStyles(token, isDarkMode) {
  var type = isDarkMode ? 'dark' : 'light';
  var colorText = colorScales.gray[type][11];
  var colorTextSecondary = colorScales.gray[type][10];
  var colorTextTertiary = colorScales.gray[type][7];
  var colorRed = isDarkMode ? colorScales.red[type][9] : colorScales.volcano[type][9];
  var colorOrange = isDarkMode ? colorScales.gold[type][9] : colorScales.orange[type][9];
  var colorGreen = isDarkMode ? colorScales.lime[type][9] : colorScales.green[type][9];
  var colorBlue = isDarkMode ? colorScales.blue[type][9] : colorScales.geekblue[type][9];
  var loaderContainer = isDarkMode ? 'https://github.com/images/modules/pulls/progressive-disclosure-line-dark.svg' : 'https://github.com/images/modules/pulls/progressive-disclosure-line.svg';
  var loadingImage = isDarkMode ? 'https://github.githubassets.com/images/mona-loading-dark.gif' : 'https://github.githubassets.com/images/mona-loading-default.gif';
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    main {\n      --color-prettylights-syntax-comment: ", ";\n      --color-prettylights-syntax-constant: ", ";\n      --color-prettylights-syntax-entity: ", ";\n      --color-prettylights-syntax-storage-modifier-import: ", ";\n      --color-prettylights-syntax-entity-tag: ", ";\n      --color-prettylights-syntax-keyword: ", ";\n      --color-prettylights-syntax-string: ", ";\n      --color-prettylights-syntax-variable: ", ";\n      --color-prettylights-syntax-brackethighlighter-unmatched: ", ";\n      --color-prettylights-syntax-invalid-illegal-text: ", ";\n      --color-prettylights-syntax-invalid-illegal-bg: ", ";\n      --color-prettylights-syntax-carriage-return-text: ", ";\n      --color-prettylights-syntax-carriage-return-bg: ", ";\n      --color-prettylights-syntax-string-regexp: ", ";\n      --color-prettylights-syntax-markup-list: ", ";\n      --color-prettylights-syntax-markup-heading: ", ";\n      --color-prettylights-syntax-markup-italic: ", ";\n      --color-prettylights-syntax-markup-bold: ", ";\n      --color-prettylights-syntax-markup-deleted-text: ", ";\n      --color-prettylights-syntax-markup-deleted-bg: ", ";\n      --color-prettylights-syntax-markup-inserted-text: ", ";\n      --color-prettylights-syntax-markup-inserted-bg: ", ";\n      --color-prettylights-syntax-markup-changed-text: ", ";\n      --color-prettylights-syntax-markup-changed-bg: ", ";\n      --color-prettylights-syntax-markup-ignored-text: ", ";\n      --color-prettylights-syntax-markup-ignored-bg: ", ";\n      --color-prettylights-syntax-meta-diff-range: ", ";\n      --color-prettylights-syntax-brackethighlighter-angle: ", ";\n      --color-prettylights-syntax-sublimelinter-gutter-mark: ", ";\n      --color-prettylights-syntax-constant-other-reference-link: ", ";\n      --color-btn-text: ", ";\n      --color-btn-bg: ", ";\n      --color-btn-border: ", ";\n      --color-btn-shadow: 0 0 transparent;\n      --color-btn-inset-shadow: 0 0 transparent;\n      --color-btn-hover-bg: ", ";\n      --color-btn-hover-border: ", ";\n      --color-btn-active-bg: ", ";\n      --color-btn-active-border: ", ";\n      --color-btn-selected-bg: ", ";\n      --color-btn-primary-text: ", ";\n      --color-btn-primary-bg: ", ";\n      --color-btn-primary-border: ", ";\n      --color-btn-primary-shadow: 0 0 transparent;\n      --color-btn-primary-inset-shadow: 0 0 transparent;\n      --color-btn-primary-hover-bg: ", ";\n      --color-btn-primary-hover-border: ", ";\n      --color-btn-primary-selected-bg: ", ";\n      --color-btn-primary-selected-shadow: 0 0 transparent;\n      --color-btn-primary-disabled-text: ", ";\n      --color-btn-primary-disabled-bg: ", ";\n      --color-btn-primary-disabled-border: ", ";\n      --color-action-list-item-default-hover-bg: ", ";\n      --color-segmented-control-bg: ", ";\n      --color-segmented-control-button-bg: transparent;\n      --color-segmented-control-button-selected-border: ", ";\n      --color-fg-default: ", ";\n      --color-fg-muted: ", ";\n      --color-fg-subtle: ", ";\n      --color-canvas-default: transparent;\n      --color-canvas-overlay: ", ";\n      --color-canvas-inset: transparent;\n      --color-canvas-subtle: ", ";\n      --color-border-default: ", ";\n      --color-border-muted: ", ";\n      --color-neutral-muted: ", ";\n      --color-neutral-subtle: ", ";\n      --color-accent-fg: ", ";\n      --color-accent-emphasis: ", ";\n      --color-accent-muted: ", ";\n      --color-accent-subtle: ", ";\n      --color-success-fg: ", ";\n      --color-attention-fg: ", ";\n      --color-attention-muted: ", ";\n      --color-attention-subtle: ", ";\n      --color-danger-fg: ", ";\n      --color-danger-muted: ", ";\n      --color-danger-subtle: ", ";\n      --color-primer-shadow-inset: 0 0 transparent;\n      --color-scale-gray-7: ", ";\n      --color-scale-blue-8: ", ";\n      --color-social-reaction-bg-hover: ", ";\n      --color-social-reaction-bg-reacted-hover: ", ";\n\n      .markdown pre {\n        color: ", ";\n      }\n\n      .pagination-loader-container {\n        background-image: url(", ");\n      }\n\n      .gsc-pagination-button {\n        background-color: var(--color-btn-bg);\n      }\n\n      .gsc-reactions-popover {\n        width: 170px;\n\n        > .m-2 {\n          display: flex;\n          flex-wrap: wrap;\n          gap: 8px;\n        }\n      }\n\n      .gsc-emoji-button.has-reacted {\n        border-color: ", ";\n        border-radius: ", "px;\n      }\n\n      .gsc-loading-image {\n        background-image: url(", ");\n      }\n    }\n  "])), colorTextTertiary, colorGreen, colorOrange, colorRed, colorBlue, colorBlue, colorGreen, colorRed, colorRed, colorTextSecondary, rgba(colorRed, 0.4), colorTextSecondary, rgba(colorRed, 0.6), colorGreen, colorOrange, colorBlue, colorTextSecondary, colorTextSecondary, colorTextSecondary, rgba(colorRed, 0.2), colorGreen, rgba(colorGreen, 0.2), colorOrange, rgba(colorRed, 0.2), colorTextSecondary, rgba(colorBlue, 0.2), colorOrange, colorTextSecondary, colorTextTertiary, colorBlue, token.colorText, token.colorFillTertiary, token.colorBorderSecondary, token.colorFillSecondary, token.colorBorder, token.colorFillSecondary, token.colorBorder, token.colorFillSecondary, readableColor(token.colorPrimary), token.colorPrimary, token.colorPrimaryBorder, token.colorPrimaryHover, token.colorPrimaryBorderHover, token.colorPrimaryActive, rgba(readableColor(token.colorPrimary), 0.5), rgba(token.colorPrimary, 0.5), rgba(token.colorPrimaryBorder, 0.5), token.colorFillQuaternary, token.colorFillTertiary, token.colorBorder, token.colorText, token.colorTextSecondary, token.colorTextQuaternary, token.colorBgElevated, token.colorFillQuaternary, token.colorBorder, token.colorBorderSecondary, token.colorFillQuaternary, token.colorFillTertiary, token.colorInfo, token.colorInfoBorderHover, token.colorInfoBorder, token.colorInfoBg, token.colorSuccess, token.colorWarning, token.colorWarningBorder, token.colorWarningBg, token.colorError, token.colorErrorBorder, token.colorErrorBg, token.colorBgContainer, token.colorInfoBg, token.colorFillSecondary, token.colorInfoBgHover, colorText, loaderContainer, token.colorInfoBorderHover, token.borderRadius, loadingImage);
};
export var formatLang = function formatLang(lang) {
  if (['zh_CN', 'zh_TW'].includes(lang)) {
    return lang.replace('_', '-');
  } else if (lang === 'zh_HK') {
    return 'zh-TW';
  } else {
    return lang.split('_')[0];
  }
};