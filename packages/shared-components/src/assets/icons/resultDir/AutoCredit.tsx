
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M9 27.5V20.8666C9 20.2941 9.10924 19.7269 9.32185 19.1954L12.2457 11.8858C12.7013 10.7469 13.8044 10 15.0311 10H25.9689C27.1956 10 28.2987 10.7469 28.7543 11.8858L31.6781 19.1954C31.8908 19.7269 32 20.2941 32 20.8666V27.5C32 28.3284 31.3284 29 30.5 29H29.3333C28.597 29 28 28.403 28 27.6667C28 27.2985 27.7015 27 27.3333 27H13.6667C13.2985 27 13 27.2985 13 27.6667C13 28.403 12.403 29 11.6667 29H10.5C9.67157 29 9 28.3284 9 27.5ZM13.351 15.947L14.1581 13.5257C14.3623 12.9131 14.9355 12.5 15.5811 12.5H25.4189C26.0645 12.5 26.6377 12.9131 26.8419 13.5257L27.649 15.947C27.8217 16.465 27.4361 17 26.8901 17H14.1099C13.5639 17 13.1783 16.465 13.351 15.947ZM14.9 21.5C14.9 22.4389 14.1389 23.2 13.2 23.2C12.2611 23.2 11.5 22.4389 11.5 21.5C11.5 20.5612 12.2611 19.8 13.2 19.8C14.1389 19.8 14.9 20.5612 14.9 21.5ZM27.8001 23.2C28.739 23.2 29.5001 22.4389 29.5001 21.5C29.5001 20.5612 28.739 19.8 27.8001 19.8C26.8612 19.8 26.1001 20.5612 26.1001 21.5C26.1001 22.4389 26.8612 23.2 27.8001 23.2Z'
        fill='currentColor'
      /></svg> );
};