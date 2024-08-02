import { FC, PropsWithChildren } from 'react';
import './ScheduleLegend.scss';

const ScheduleLegend: FC = ({ children }: PropsWithChildren) => {
  return <div className='rf-schedule-legend'>{children}</div>;
};

export default ScheduleLegend;
