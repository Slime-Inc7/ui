import { createContext, memo, useContext } from 'react';
import { genCdnUrl } from "../utils/genCdnUrl";
import { jsx as _jsx } from "react/jsx-runtime";
export var ConfigContext = /*#__PURE__*/createContext(null);
var ConfigProvider = /*#__PURE__*/memo(function (_ref) {
  var children = _ref.children,
      config = _ref.config;
  return /*#__PURE__*/_jsx(ConfigContext.Provider, {
    value: config,
    children: children
  });
});

export var useCdnFn = function useCdnFn() {
  var config = useContext(ConfigContext);
  if (!config) return function (_ref2) {
    var pkg = _ref2.pkg,
        version = _ref2.version,
        path = _ref2.path;
    if (pkg === '@lobehub/assets-logo') {  // 로고 패키지일 경우 직접 URL 반환
      return 'https://cafeptthumb-phinf.pstatic.net/MjAyNDA2MThfMjY5/MDAxNzE4NjcwMDk2NzEx.MtcQUfcarXwhmMlj06k7-ikFrhsDTdH_wJe_tlQ6qoYg.T38Yqxbtjyc00axRtMCNnET8BCXgppAshnbjnxTEc20g.PNG/slime.png?type=w1600';
    }
    return genCdnUrl({
      path: path,
      pkg: pkg,
      proxy: 'aliyun',
      version: version
    });
  };
  if (config.proxy !== 'custom') return function (_ref3) {
    var pkg = _ref3.pkg,
        version = _ref3.version,
        path = _ref3.path;
    if (pkg === '@lobehub/assets-logo') {  // 로고 패키지일 경우 직접 URL 반환
      return 'https://cafeptthumb-phinf.pstatic.net/MjAyNDA2MThfMjY5/MDAxNzE4NjcwMDk2NzEx.MtcQUfcarXwhmMlj06k7-ikFrhsDTdH_wJe_tlQ6qoYg.T38Yqxbtjyc00axRtMCNnET8BCXgppAshnbjnxTEc20g.PNG/slime.png?type=w1600';
    }
    return genCdnUrl({
      path: path,
      pkg: pkg,
      proxy: config.proxy,
      version: version
    });
  };
  return config.customCdnFn || function (_ref4) {
    var pkg = _ref4.pkg,
        version = _ref4.version,
        path = _ref4.path;
    if (pkg === '@lobehub/assets-logo') {  // 로고 패키지일 경우 직접 URL 반환
      return 'https://cafeptthumb-phinf.pstatic.net/MjAyNDA2MThfMjY5/MDAxNzE4NjcwMDk2NzEx.MtcQUfcarXwhmMlj06k7-ikFrhsDTdH_wJe_tlQ6qoYg.T38Yqxbtjyc00axRtMCNnET8BCXgppAshnbjnxTEc20g.PNG/slime.png?type=w1600';
    }
    return genCdnUrl({
      path: path,
      pkg: pkg,
      proxy: 'aliyun',
      version: version
    });
  };
};

export default ConfigProvider;
