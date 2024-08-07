import iconMap from "./icon-map.json";
function getFileExtension(fileName) {
  return fileName.slice(Math.max(0, fileName.lastIndexOf('.') + 1));
}
function getFileSuffix(fileName) {
  return fileName.slice(fileName.indexOf('.') + 1);
}
export function filenameFromPath(path) {
  var _segments$at;
  var segments = path.split('/');
  return (_segments$at = segments.at(-1)) !== null && _segments$at !== void 0 ? _segments$at : path;
}
export function getIconNameForFileName(fileName) {
  var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _iconMap$fileNames;
  return (_ref = (_ref2 = (_ref3 = (_ref4 = (_ref5 = (_ref6 = (_iconMap$fileNames = iconMap.fileNames[fileName]) !== null && _iconMap$fileNames !== void 0 ? _iconMap$fileNames : iconMap.fileNames[fileName.toLowerCase()]) !== null && _ref6 !== void 0 ? _ref6 : iconMap.fileExtensions[getFileSuffix(fileName)]) !== null && _ref5 !== void 0 ? _ref5 : iconMap.fileExtensions[getFileExtension(fileName)]) !== null && _ref4 !== void 0 ? _ref4 : fileName.endsWith('.html') ? 'html' : null) !== null && _ref3 !== void 0 ? _ref3 : fileName.endsWith('.ts') ? 'typescript' : null) !== null && _ref2 !== void 0 ? _ref2 : fileName.endsWith('.js') ? 'javascript' : null) !== null && _ref !== void 0 ? _ref : 'file';
}
export function getIconNameForDirectoryName(dirName) {
  var _ref7, _iconMap$folderNames;
  return (_ref7 = (_iconMap$folderNames = iconMap.folderNames[dirName]) !== null && _iconMap$folderNames !== void 0 ? _iconMap$folderNames : iconMap.folderNames[dirName.toLowerCase()]) !== null && _ref7 !== void 0 ? _ref7 : 'folder';
}
export function getIconForFilePath(path) {
  var fileName = filenameFromPath(path);
  return getIconNameForFileName(fileName);
}
export function getIconForDirectoryPath(path) {
  var dirName = filenameFromPath(path);
  return getIconNameForDirectoryName(dirName);
}
export function getIconUrlByName(iconName, iconsUrl, open) {
  return "".concat(iconsUrl, "/").concat(iconName.toString()).concat(open ? '-open' : '', ".svg");
}
export function getIconUrlForFilePath(path, iconsUrl) {
  var iconName = getIconForFilePath(path);
  return getIconUrlByName(iconName, iconsUrl);
}
export function getIconUrlForDirectoryPath(path, iconsUrl, open) {
  var iconName = getIconForDirectoryPath(path);
  return getIconUrlByName(iconName, iconsUrl, open);
}