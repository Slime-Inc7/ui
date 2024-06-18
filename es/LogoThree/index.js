import { memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import Img from "../Img";
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
  return /*#__PURE__*/_jsxs(Flexbox, {
    align: 'center',
    className: className,
    flex: 'none',
    justify: 'center',
    style: _objectSpread({
      height: size,
      overflow: 'hidden',
      position: 'relative',
      width: size
    }, style),
    children: [loading && /*#__PURE__*/_jsx(Img, {
      alt: 'logo',
      height: size * 0.75,
      src: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDA2MThfMjY5/MDAxNzE4NjcwMDk2NzEx.MtcQUfcarXwhmMlj06k7-ikFrhsDTdH_wJe_tlQ6qoYg.T38Yqxbtjyc00axRtMCNnET8BCXgppAshnbjnxTEc20g.PNG/slime.png?type=w1600', // 원하는 URL로 직접 설정
      style: {
        position: 'absolute'
      },
      width: size * 0.75,
      onError: function onError() {
        setLoading(false); // 로딩 실패 시 동작 설정
      }
    }), ...]
  });
});
export default LogoThree;
