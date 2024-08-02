import  {
  useCallback, useRef, Fragment
} from 'react';
import { useResizeDetector } from 'react-resize-detector';
import Breadcrumb from './Breadcrumb';
import { IBreadcrumb } from './Breadcrumb/Breadcrumb';
import Menu from '../../atoms/Menu';

import './Breadcrumbs.scss';
import AllMenuHorizontal from '../../../assets/icons/resultDir/AllMenuHorizontal';

export interface IBreadcrumbsProps {
  /**
   * Список хлебных крошек
   */
  list: IBreadcrumb[];
}

const MENU_WIDTH = 58;

const Breadcrumbs = ({ list = [] }: IBreadcrumbsProps) => {
  const hiddenIndexes = useRef<number[]>([]);
  const refs = useRef<HTMLDivElement[]>([]);

  /** Определяем ширину элемента */
  const getWidthElement = (element: HTMLDivElement | null) => element?.getBoundingClientRect().width || 0;

  /** Определяем ширину по массиву элементов */
  const getWidthByVisible = (elements: HTMLDivElement[]) => {
    let fullWidth = 0;

    elements.map((element) => {
      fullWidth += getWidthElement(element);
    });

    return fullWidth;
  };

  const onResize = useCallback((width: number | undefined) => {
    if (!width) {
      return;
    }

    const visibleElements = [...refs.current].filter((_, index) => !hiddenIndexes.current.includes(index));
    const hasHidden = !!hiddenIndexes.current.length;
    const fullWidth = hasHidden ?
      getWidthByVisible(visibleElements) + MENU_WIDTH :
      getWidthByVisible(visibleElements);

    const lastHiddenIndex = hiddenIndexes.current[hiddenIndexes.current.length - 1];

    if (width < fullWidth) {
      hiddenIndexes.current.push(lastHiddenIndex ? lastHiddenIndex + 1 : 1);
      onResize(width);
    } else {
      if (hiddenIndexes.current.length) {
        const isLastIndex = hiddenIndexes.current.length === 1;

        const fullWidthWithLastElement = isLastIndex ?
          fullWidth + getWidthElement(refs.current[lastHiddenIndex]) - MENU_WIDTH :
          fullWidth + getWidthElement(refs.current[lastHiddenIndex]);

        if (width > fullWidthWithLastElement) {
          hiddenIndexes.current = hiddenIndexes.current.filter((index) => index !== lastHiddenIndex);
          onResize(width);
        }
      }
    }

  }, []);

  const { ref } = useResizeDetector<HTMLDivElement>({
    onResize,
    refreshMode: 'debounce',
    refreshRate: 200,
  });

  const getMenuByHiddenIndexes = useCallback(() => {
    return hiddenIndexes.current.map((index) => {
      const currentItem = list[index];

      return ({
        value: currentItem.href,
        href: currentItem.href,
        label: currentItem.children
      });
    });
  }, [list]);

  if (!list.length) {
    return null;
  }

  return (
    <div className='rf-breadcrumbs' ref={ref}>
      {list.map(({ children, ...breadcrumb }, index) => {
        return (
          <Fragment key={`${breadcrumb.href}/${index}`}>
            {(hiddenIndexes.current.length > 0 && hiddenIndexes.current[0] === index) && (
              <div>
                <Menu
                  position='bottom-start'
                  className='rf-breadcrumbs__menu'
                  list={getMenuByHiddenIndexes()}
                  style={{ maxWidth: '240px' }}
                >
                  <Breadcrumb component='button' isLast={hiddenIndexes.current.includes(list.length - 1)}>
                    <AllMenuHorizontal height='20px' />
                  </Breadcrumb>
                </Menu>
              </div>
            )}
            <Breadcrumb
              ref={el => refs.current[index] = el as HTMLDivElement}
              {...breadcrumb}
              isHidden={hiddenIndexes.current.includes(index)}
              isLast={index === list.length - 1}
            >
              {children}
            </Breadcrumb>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
