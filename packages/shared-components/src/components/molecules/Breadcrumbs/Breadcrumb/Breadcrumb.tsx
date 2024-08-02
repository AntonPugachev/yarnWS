import  { forwardRef, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import Tooltip from '../../../atoms/Tooltip';
import { ArrowsChevronRight } from '../../../../indexIcon';
import { classnames } from '../../../../utils/classnames';
import Link from '../../../atoms/Link';
import { ILinkProps } from '../../../atoms/Link/Link';

import './Breadcrumb.scss';

export interface IBreadcrumb extends Omit<ILinkProps<any>, 'children'> {
  /** Заголовок */
  children: ReactNode | string;
  /** Ссылка */
  href: string;
  /** Заблокирован выбор или нет
   * @default false
   */
  disabled?: boolean;
  /** Указывает последний элемент */
  isLast?: boolean;
  /** Указывает нужно ли скрыть элемент */
  isHidden?: boolean;
}

const MAX_LENGTH = 40;

const Breadcrumb = forwardRef<HTMLDivElement, IBreadcrumb>(({ children, href, isLast, isHidden, ...props }: IBreadcrumb, ref) => {
  const isShort = typeof children === 'string' ? children.length > MAX_LENGTH : false;

  return (
    <div ref={ref} className={classnames('rf-breadcrumb__wrap', isHidden && 'rf-breadcrumb__wrap--hidden')}>
      <Link
        className='rf-breadcrumb'
        to={href}
        component={NavLink}
        color='secondary'
        endAdornment={!isLast && <ArrowsChevronRight className='rf-breadcrumb__icon' size='xxxs' />}
        {...props}
      >
        {isShort ?
          <Tooltip position='bottom'>
            <>{(children as string).slice(0, MAX_LENGTH)}...</>
            <>{children}</>
          </Tooltip> :
          children
        }
      </Link>
    </div>
  );
});

export default Breadcrumb;
