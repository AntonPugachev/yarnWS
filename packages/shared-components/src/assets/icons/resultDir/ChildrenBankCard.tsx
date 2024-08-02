
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M20 25C20.8284 25 21.5 24.3284 21.5 23.5C21.5 22.6716 20.8284 22 20 22C19.1716 22 18.5 22.6716 18.5 23.5C18.5 24.3284 19.1716 25 20 25Z'
        fill='currentColor'
      /><path fillRule='evenodd' clipRule='evenodd' d='M28.8145 16.7949C29.5462 16.0753 29.9999 15.0739 29.9999 13.9666C29.9999 11.7759 28.224 10 26.0333 10C24.4909 10 23.154 10.8804 22.4979 12.1662C21.6894 11.9707 20.8412 11.8666 19.9669 11.8666C18.7904 11.8666 17.6612 12.055 16.6123 12.4011C16.005 10.9889 14.6013 10.0001 12.9666 10.0001C10.7759 10.0001 9 11.776 9 13.9667C9 15.3753 9.73424 16.6124 10.8409 17.3162C10.2584 18.4987 9.93369 19.814 9.93369 21.1998C9.93369 26.3544 14.4257 30.533 19.9669 30.533C25.508 30.533 30 26.3544 30 21.1998C30 19.6068 29.571 18.1069 28.8145 16.7949ZM16.9339 18.6332C16.9339 19.2775 16.4116 19.7998 15.7672 19.7998C15.1229 19.7998 14.6006 19.2775 14.6006 18.6332C14.6006 17.9889 15.1229 17.4666 15.7672 17.4666C16.4116 17.4666 16.9339 17.9889 16.9339 18.6332ZM23.6999 19.7998C24.3442 19.7998 24.8665 19.2775 24.8665 18.6332C24.8665 17.9889 24.3442 17.4666 23.6999 17.4666C23.0555 17.4666 22.5332 17.9889 22.5332 18.6332C22.5332 19.2775 23.0555 19.7998 23.6999 19.7998ZM24.1196 23.8598C24.1196 25.9474 22.2392 27.6397 19.9197 27.6397C17.6001 27.6397 15.7197 25.9474 15.7197 23.8598C15.7197 21.7722 17.6001 20.0798 19.9197 20.0798C22.2392 20.0798 24.1196 21.7722 24.1196 23.8598Z'
        fill='currentColor'
      /></svg> );
};
