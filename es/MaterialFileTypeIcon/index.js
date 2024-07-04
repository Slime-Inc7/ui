'use client';

import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["filename", "size", "variant", "type", "style", "open"];
import { memo, useMemo } from 'react';
import { Center } from 'react-layout-kit';
import { useCdnFn } from "../ConfigProvider";
import FileTypeIcon from "../FileTypeIcon";
import Img from "../Img";
import { getIconUrlForDirectoryPath, getIconUrlForFilePath } from "./utils";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var MaterialFileTypeIcon = /*#__PURE__*/memo(function (_ref) {
  var filename = _ref.filename,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 48 : _ref$size,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'pure' : _ref$variant,
    type = _ref.type,
    style = _ref.style,
    open = _ref.open,
    rest = _objectWithoutProperties(_ref, _excluded);
  var genCdnUrl = useCdnFn();
  var ICONS_URL = genCdnUrl({
    path: 'assets',
    pkg: '@lobehub/assets-fileicon',
    version: '1.0.0'
  });
  var iconUrl = useMemo(function () {
    return type === 'file' ? getIconUrlForFilePath(filename, ICONS_URL) : getIconUrlForDirectoryPath(filename, ICONS_URL, open);
  }, [ICONS_URL, type, filename, open]);
  if (variant === 'pure') return /*#__PURE__*/_jsx(Img, _objectSpread({
    height: size,
    src: iconUrl,
    style: style,
    width: size
  }, rest));
  return /*#__PURE__*/_jsxs(Center, _objectSpread(_objectSpread({
    flex: 'none',
    height: size,
    style: _objectSpread({
      position: 'relative'
    }, style),
    width: size
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx(FileTypeIcon, {
      type: variant,
      variant: 'mono'
    }), /*#__PURE__*/_jsx(Img, _objectSpread({
      height: size / 2,
      src: iconUrl,
      style: {
        position: 'absolute',
        top: size / 3
      },
      width: size / 2
    }, rest))]
  }));
});
export default MaterialFileTypeIcon;