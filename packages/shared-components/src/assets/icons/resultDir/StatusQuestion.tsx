
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM9.5989 10.0262C9.12231 10.0262 8.72704 9.62435 8.86147 9.16711C9.22562 7.92855 10.3122 7.09131 12.0389 7.09131C13.9778 7.09131 15.2727 8.23066 15.2727 9.8171C15.2727 10.9204 14.735 11.692 13.7726 12.2761C12.8456 12.8241 12.5838 13.1991 12.5838 13.9202C12.5838 14.1512 12.3966 14.3385 12.1656 14.3385H11.4542C11.1702 14.3385 10.939 14.1104 10.9351 13.8265C10.8714 12.7592 11.2818 12.1102 12.2583 11.5261C13.1357 10.9853 13.4329 10.5959 13.4329 9.882C13.4329 9.11763 12.8385 8.56237 11.947 8.56237C11.3282 8.56237 10.8591 8.82408 10.6033 9.27117C10.3824 9.65734 10.0438 10.0262 9.5989 10.0262ZM12.8102 16.7037C12.8102 17.2734 12.3574 17.7277 11.7842 17.7277C11.211 17.7277 10.7511 17.2734 10.7511 16.7037C10.7511 16.134 11.211 15.6869 11.7842 15.6869C12.3574 15.6869 12.8102 16.134 12.8102 16.7037Z' fill='#0D69F2'/></svg> );
};
