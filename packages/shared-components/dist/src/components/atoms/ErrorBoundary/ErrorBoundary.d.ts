import React, { ErrorInfo, ReactNode } from 'react';
interface IProps {
    error: ReactNode;
}
declare class ErrorBoundary extends React.Component<IProps> {
    constructor(props: IProps);
    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
    };
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): any;
}
export default ErrorBoundary;
