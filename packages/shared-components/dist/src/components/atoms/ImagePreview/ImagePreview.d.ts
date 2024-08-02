import './ImagePreview.scss';
export interface IImagePreviewProps {
    /** Массив изображений*/
    images: string[];
    /** Функция закрытия */
    onClose: () => void;
}
declare const ImagePreview: React.FC<IImagePreviewProps>;
export default ImagePreview;
