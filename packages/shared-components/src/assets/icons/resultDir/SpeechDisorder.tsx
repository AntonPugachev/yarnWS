
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M26.6208 14.6512L31.409 18.4861C31.6257 18.6664 31.7983 18.8956 31.8998 19.1538L25.2864 19.1538C24.7892 19.1536 24.1307 19.1533 23.4561 19.3901L21.3964 19.953C20.4519 20.1205 19.5101 20.1182 18.5656 19.9461L16.5033 19.5704C15.843 19.3476 15.201 19.3479 14.7138 19.3482L8.07959 19.3482C8.16369 19.0696 8.31454 18.8146 8.53213 18.6336L13.3203 14.7987C14.9164 13.4712 17.0444 13.3237 18.7735 14.3562L19.0395 14.5037C19.5715 14.7987 20.2366 14.7987 20.7686 14.5037L21.1676 14.3562C22.8967 13.3237 25.0247 13.3237 26.6208 14.6512Z'
        fill='currentColor'
      /><path d='M8.47872 21.1943C12.9081 29.0685 20.1036 28.3685 20.1036 28.3685C20.1036 28.3685 27.3337 29.0718 31.5126 21H25.3334C24.7783 21 24.4065 21.0084 24.0495 21.1385L24.0136 21.1516L21.8049 21.7552L21.7656 21.7624C20.5895 21.9766 19.4107 21.9766 18.2347 21.7624L16.0243 21.3597L15.9508 21.3329C15.5937 21.2028 15.2219 21.1943 14.6668 21.1943H8.47872Z'
        fill='currentColor'
      /></svg> );
};
