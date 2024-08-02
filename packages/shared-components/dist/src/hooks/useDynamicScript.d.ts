interface IProps {
    url: string;
}
/** подгружает динамически скрипт модуля*/
export declare const useDynamicScript: ({ url }: IProps) => {
    ready: boolean;
    failed: boolean;
};
/** регистрирует модуль*/
export declare function loadComponent(scope: string, module: string): () => Promise<any>;
export {};
