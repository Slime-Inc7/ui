import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { memo, useState, useCallback, CSSProperties } from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const LOGO_URL = 'https://raw.githubusercontent.com/Slime-Inc7/ui/master/logo-3d.png';

const LogoSpline = /*#__PURE__*/memo(function ({ className, style, width = 150, height = 150 }) {
  const [loading, setLoading] = useState(true); // 상태값을 loading으로 명확히 설정
  const handleLoad = useCallback(() => {
    setLoading(false); // 이미지 로딩 완료 시 상태 업데이트
  }, []);

  // width와 height를 숫자형 값으로 변환하여 NaN이 발생하지 않도록 함
  const computedWidth = width ? parseFloat(width.toString()) : 150;
  const computedHeight = height ? parseFloat(height.toString()) : 150;

  const containerStyle = _objectSpread({
    height: computedHeight,
    width: computedWidth,
    position: 'relative'
  }, style);

  return /*#__PURE__*/_jsxs("div", {
    className: className,
    style: containerStyle,
    children: [
      loading && /*#__PURE__*/_jsx("img", {
        alt: 'logo',
        height: computedHeight * 0.75,
        onLoad: handleLoad,
        src: LOGO_URL,
        style: {
          position: 'absolute'
        },
        width: computedWidth * 0.75
      }),
      !loading && /*#__PURE__*/_jsx("img", {
        alt: 'logo',
        height: computedHeight,
        src: LOGO_URL,
        style: {
          flex: 'none',
          height: computedHeight,
          width: computedWidth
        }
      })
    ]
  });
});

export default LogoSpline;
