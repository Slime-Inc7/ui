import { FC } from 'react';
import { FlexboxProps } from 'react-layout-kit';
import { type IconProps } from "../Icon";
export interface FolderProps extends FlexboxProps {
    defaultOpen?: boolean;
    icon?: IconProps['icon'];
    name: string;
}
declare const Folder: FC<FolderProps>;
export default Folder;
