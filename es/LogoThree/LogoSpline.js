import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { memo, useState, useCallback, CSSProperties } from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const LOGO_URL = 'https://raw.githubusercontent.com/Slime-Inc7/ui/master/logo-3d.png';

const LogoSpline = /*#__PURE__*/memo(function ({ className, style, width = 150, height = 150 }) {
  const [_useState, setUseState] = useState(true); // 수정된 부분
  const handleLoad = useCallback(() => {
    setUseState(false);
  }, []);

  // width와 height를 숫자형 값으로 변환하여 NaN이 발생하지 않도록 함
  const computedWidth = parseFloat(width.toString()) || 150;
  const computedHeight = parseFloat(height.toString()) || 150;

  const containerStyle: CSSProperties = {
    height: computedHeight,
    width: computedWidth,
    position: 'relative',
    ...style
  };

  return /*#__PURE__*/_jsxs("div", {
    children: [
      _useState && /*#__PURE__*/_jsx("img", {
        alt: 'logo',
        height: computedHeight * 0.75,
        onLoad: handleLoad,
        src: LOGO_URL,
        style: {
          position: 'absolute'
        },
        width: computedWidth * 0.75
      }),
      !_useState && /*#__PURE__*/_jsx("img", {
        alt: 'logo',
        height: computedHeight,
        src: LOGO_URL,
        style: {
          flex: 'none',
          height: computedHeight,
          width: computedWidth
        }
      })
    ],
    className: className,
    style: containerStyle
  });
});

export default LogoSpline;
