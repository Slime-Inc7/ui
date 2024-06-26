import { FC } from 'react';
import { FlexboxProps } from 'react-layout-kit';
import { type IconProps } from "../Icon";
export interface FileProps extends Omit<FlexboxProps, 'children'> {
    icon?: IconProps['icon'];
    name: string;
}
declare const File: FC<FileProps>;
export default File;
