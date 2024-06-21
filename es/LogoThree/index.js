import { memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var LogoThree = /*#__PURE__*/memo(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 128 : _ref$size,
      _onLoad = _ref.onLoad,
      rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  // 새로운 스타일 객체 추가
  const containerStyle = {
    height: size,
    width: size,
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

  return /*#__PURE__*/_jsxs(Flexbox, {
    align: 'center',
    justify: 'center', // 중앙 정렬 추가
    className: className,
    flex: 'none',
    style: containerStyle,  // 수정된 스타일 사용
    children: [loading && /*#__PURE__*/_jsx("div", {
      style: { position: 'absolute' },
      children: "Loading..." // 로딩 중일 때 표시할 내용
    }), /*#__PURE__*/_jsx("img", _objectSpread({
      src: 'https://raw.githubusercontent.com/Slime-Inc7/ui/master/logo-3d.png', // 이미지 URL
      alt: 'Logo Image',
      onLoad: function onLoad() {
        setLoading(false);
        _onLoad === null || _onLoad === void 0 || _onLoad();
      },
      style: imgStyle  // 이미지 스타일 적용
    }, rest))]
  });
});
export default LogoThree;
