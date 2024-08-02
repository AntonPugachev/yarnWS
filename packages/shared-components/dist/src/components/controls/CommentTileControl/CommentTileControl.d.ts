import { ReactNode } from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import { ICommentTileProps } from '../../molecules/CommentTile/CommentTile';
import { IRequestAttachment } from '../../../types/projects.types';
export type ICommentTileControlProps = Omit<ICommentTileProps, 'defaultValue'> & IControlProps & {
    formGroupProps?: IPartialFormGroup;
    label?: ReactNode;
    defaultValue?: {
        value?: string;
        files?: IRequestAttachment[];
    };
};
declare const CommentTileControl: ({ name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props }: ICommentTileControlProps) => import("react/jsx-runtime").JSX.Element;
export default CommentTileControl;
