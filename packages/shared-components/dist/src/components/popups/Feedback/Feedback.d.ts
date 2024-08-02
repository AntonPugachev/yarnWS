import { ReactNode } from 'react';
import { IModalProps } from '../../atoms/Modal/Modal';
import './Feedback.scss';
export type FeedbackData = {
    email: string;
    zdate: string;
    projectId: string | number;
    rate: number;
    browser: string;
    status: string;
    text: string;
    userId: string;
    userName: string;
    file64: string;
    screen: string;
    isAnswered: number;
    photo: string;
    userPosition: string;
    userDepartment: string;
};
export interface IFeedbackProps extends Omit<IModalProps, 'children'> {
    title?: ReactNode;
    description?: ReactNode;
    textareaPlaceholder?: string;
    postFeedback: (data: Partial<FeedbackData>) => Promise<any>;
}
export declare const Feedback: ({ title, description, textareaPlaceholder, postFeedback, onClose, ...props }: IFeedbackProps) => import("react/jsx-runtime").JSX.Element;
export default Feedback;
