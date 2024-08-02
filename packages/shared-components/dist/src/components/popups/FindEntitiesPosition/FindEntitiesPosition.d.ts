import './FindEntitiesPosition.scss';
import { FC } from 'react';
import { IStructure } from '../../../types/projects.types';
import { ITooltipProps } from '../../atoms/Tooltip/Tooltip';
interface IFindEntitiesPositionProps {
    /** Должность */
    position: {
        position: string;
        positionText: string;
        departmentsPath?: IStructure[];
    };
    /** Выбрана ли должность */
    isSelected: boolean;
    /** Изменение выбора должности */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Дизейбл чекбокса */
    disabled?: boolean;
    /** Цвет tooltip */
    tooltipBackground?: ITooltipProps['background'];
}
export declare const FindEntitiesPosition: FC<IFindEntitiesPositionProps>;
export {};
