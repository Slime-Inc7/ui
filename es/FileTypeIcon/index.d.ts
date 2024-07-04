/// <reference types="react" />
import { DivProps, SvgProps } from "../types";
type IconProps = SvgProps & DivProps;
export interface FileTypeIconProps extends IconProps {
    color?: string;
    filetype?: string;
    size?: number;
    type?: 'file' | 'folder';
    variant?: 'color' | 'mono';
}
declare const FileTypeIcon: import("react").NamedExoticComponent<FileTypeIconProps>;
export default FileTypeIcon;
