
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M16.5787 9.77974L20.011 16.5797C20.141 16.8373 20.4068 17 20.6975 17H26.4577C27.0639 17 27.6565 16.8223 28.1609 16.4892L32.1807 13.8345C32.6982 13.4928 32.5604 12.705 31.957 12.5556L29.977 12.0652C29.6581 11.9862 29.4343 11.7024 29.4343 11.3767V8.4256C29.4343 7.81587 28.7093 7.49 28.2461 7.89151L26.1279 9.7275C25.7489 10.056 25.155 9.90481 24.9829 9.43593L23.8931 6.46717C23.6737 5.86976 22.8331 5.83732 22.5675 6.41604L21.0425 9.73961C20.8745 10.1058 20.4331 10.2606 20.0699 10.0807L17.5399 8.8276C16.9241 8.52259 16.2708 9.16973 16.5787 9.77974ZM8.5 29.5V22.8666C8.5 22.2941 8.60924 21.7269 8.82185 21.1954L11.7457 13.8858C12.2013 12.7469 13.3044 12 14.5311 12H14.6198C14.9968 12 15.3418 12.212 15.512 12.5484L16.1326 13.7742C16.3009 14.1068 16.0593 14.5 15.6865 14.5H15.0811C14.4355 14.5 13.8623 14.9131 13.6581 15.5257L12.851 17.947C12.6783 18.465 13.0639 19 13.6099 19H28.2387C28.5301 19 28.8135 18.9043 29.0452 18.7277C29.5198 18.366 30.2089 18.5665 30.4153 19.1263L31.1781 21.1954C31.3908 21.7269 31.5 22.2941 31.5 22.8666V29.5C31.5 30.3284 30.8284 31 30 31H28.8333C28.097 31 27.5 30.403 27.5 29.6667C27.5 29.2985 27.2015 29 26.8333 29H13.1667C12.7985 29 12.5 29.2985 12.5 29.6667C12.5 30.403 11.903 31 11.1667 31H10C9.17157 31 8.5 30.3284 8.5 29.5ZM14.4 23.4998C14.4 24.4387 13.6389 25.1998 12.7 25.1998C11.7611 25.1998 11 24.4387 11 23.4998C11 22.5609 11.7611 21.7998 12.7 21.7998C13.6389 21.7998 14.4 22.5609 14.4 23.4998ZM27.3001 25.1998C28.239 25.1998 29.0001 24.4387 29.0001 23.4998C29.0001 22.5609 28.239 21.7998 27.3001 21.7998C26.3612 21.7998 25.6001 22.5609 25.6001 23.4998C25.6001 24.4387 26.3612 25.1998 27.3001 25.1998Z'
        fill='currentColor'
      /></svg> );
};
