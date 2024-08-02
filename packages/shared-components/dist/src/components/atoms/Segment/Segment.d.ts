import './Segment.scss';
import { ISegment } from '../../../types';
export interface ISegmentProps {
    /** Список значений */
    list: ISegment[];
    /** Изменение значения */
    onChange: (option: ISegment) => void;
    /** Значение */
    value?: ISegment;
    /** На всю ширину
     * @default false
    */
    fullWidth?: boolean;
}
declare const Segment: React.FC<ISegmentProps>;
export default Segment;
