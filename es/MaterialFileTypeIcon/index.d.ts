/// <reference types="react" />
import { DivProps } from "../types";
export interface MaterialFileTypeIconProps extends DivProps {
    filename: string;
    open?: boolean;
    size?: number;
    type?: 'file' | 'folder';
    variant?: 'pure' | 'file' | 'folder';
}
declare const MaterialFileTypeIcon: import("react").NamedExoticComponent<MaterialFileTypeIconProps>;
export default MaterialFileTypeIcon;
