'use client';

import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type", "size", "style", "extra", "className"];
import { useTheme } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { useCdnFn } from "../ConfigProvider";
import Img from "../Img";
import Divider from "./Divider";
import LogoText from "./LogoText";
import { LOGO_3D, useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Logo = /*#__PURE__*/memo(function (_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? '3d' : _ref$type,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 32 : _ref$size,
    style = _ref.style,
    extra = _ref.extra,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var genCdnUrl = useCdnFn();
  var theme = useTheme();
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  var logoComponent;
  switch (type) {
    case '3d':
      {
        logoComponent = /*#__PURE__*/_jsx(Img, _objectSpread({
          alt: "Slime.Inc",
          height: size,
          src: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDA2MThfMjY5/MDAxNzE4NjcwMDk2NzEx.MtcQUfcarXwhmMlj06k7-ikFrhsDTdH_wJe_tlQ6qoYg.T38Yqxbtjyc00axRtMCNnET8BCXgppAshnbjnxTEc20g.PNG/slime.png?type=w1600',
          style: style,
          width: size
        }, rest));
        break;
      }
    case 'flat':
      {
        logoComponent = /*#__PURE__*/_jsx(Img, {
          alt: "Slime.Inc",
          height: size,
          src: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDA2MThfMjY5/MDAxNzE4NjcwMDk2NzEx.MtcQUfcarXwhmMlj06k7-ikFrhsDTdH_wJe_tlQ6qoYg.T38Yqxbtjyc00axRtMCNnET8BCXgppAshnbjnxTEc20g.PNG/slime.png?type=w1600',
          style: style,
          width: size
        });
        break;
      }
    case 'mono':
      {
        logoComponent = /*#__PURE__*/_jsx(Img, {
          alt: "Slime.Inc",
          height: size,
          src: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDA2MThfMjY5/MDAxNzE4NjcwMDk2NzEx.MtcQUfcarXwhmMlj06k7-ikFrhsDTdH_wJe_tlQ6qoYg.T38Yqxbtjyc00axRtMCNnET8BCXgppAshnbjnxTEc20g.PNG/slime.png?type=w1600',
          style: style,
          width: size
        });
        break;
      }
    case 'text':
      {
        logoComponent = /*#__PURE__*/_jsx(LogoText, _objectSpread({
          className: className,
          size: size,
          style: style
        }, rest));
        break;
      }
    case 'combine':
      {
        logoComponent = /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx(Img, {
            alt: "Slime.Inc",
            height: size,
            src: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDA2MThfMjY5/MDAxNzE4NjcwMDk2NzEx.MtcQUfcarXwhmMlj06k7-ikFrhsDTdH_wJe_tlQ6qoYg.T38Yqxbtjyc00axRtMCNnET8BCXgppAshnbjnxTEc20g.PNG/slime.png?type=w1600',
            width: size
          }), /*#__PURE__*/_jsx(LogoText, {
            size: size,
            style: {
              marginLeft: Math.round(size / 4)
            }
          })]
        });
        if (!extra) logoComponent = /*#__PURE__*/_jsx(Flexbox, {
          align: 'center',
          className: className,
          flex: 'none',
          horizontal: true,
          style: style,
          children: logoComponent
        });
        break;
      }
  }
  if (!extra) return logoComponent;
  var extraSize = Math.round(size / 3 * 1.9);
  return /*#__PURE__*/_jsxs(Flexbox, _objectSpread(_objectSpread({
    align: 'center',
    className: className,
    flex: 'none',
    horizontal: true,
    style: style
  }, rest), {}, {
    children: [logoComponent, /*#__PURE__*/_jsx(Divider, {
      size: extraSize,
      style: {
        color: theme.colorFill
      }
    }), /*#__PURE__*/_jsx("div", {
      className: styles.extraTitle,
      style: {
        fontSize: extraSize
      },
      children: extra
    })]
  }));
});
export default Logo;
