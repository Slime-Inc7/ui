import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "style", "width", "height", "onLoad"];
import { useThemeMode } from 'antd-style';
import { memo, useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import Loading from "./Loading";

// 새로운 이미지 URL을 추가합니다.
var IMAGE_URL = 'https://raw.githubusercontent.com/Slime-Inc7/ui/master/logo-3d.png';

var LogoSpline = /*#__PURE__*/memo(function (_ref) {
  var className = _ref.className,
    style = _ref.style,
    width = _ref.width,
    height = _ref.height,
    _onLoad = _ref.onLoad,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useThemeMode = useThemeMode(),
    isDarkMode = _useThemeMode.isDarkMode;
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];

  // 새로운 스타일 객체 추가
  const containerStyle = {
    height: height,
    width: width,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',         // flexbox 사용
    alignItems: 'center',    // 수직 중앙 정렬
    justifyContent: 'center', // 수평 중앙 정렬
    ...style                 // 기존 스타일 병합
  };

  const imgStyle = {
    maxHeight: '100%',
    maxWidth: '100%'
  };

  return /*#__PURE__*/_jsxs("div", {
    className: className,
    style: containerStyle,  // 수정된 스타일 사용
    children: [loading && /*#__PURE__*/_jsx(Loading, {}), 
      // Spline 대신 img 태그를 사용합니다.
      /*#__PURE__*/_jsx("img", {
        src: IMAGE_URL,
        alt: "Logo",
        onLoad: function onLoad() {
          setLoading(false);
          _onLoad === null || _onLoad === void 0 || _onLoad();
        },
        style: imgStyle  // 이미지 스타일 적용
      }, rest)]
  });
});
export default LogoSpline;
