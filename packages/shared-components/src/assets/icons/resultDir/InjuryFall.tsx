
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M21.4471 8.39456C21.6651 7.59533 21.1939 6.77072 20.3947 6.55274C19.5954 6.33477 18.7708 6.80598 18.5529 7.60521L17.1577 12.7209L9.97271 19.9059C9.18344 20.6951 9.01301 21.912 9.55509 22.8877L11.6888 26.7284C12.0911 27.4525 13.0043 27.7134 13.7285 27.3111C14.4526 26.9088 14.7136 25.9956 14.3112 25.2714L12.3607 21.7605L14.1364 19.9848L19.6543 24.767C20.1997 25.2397 20.8973 25.4999 21.6191 25.4999H26.6507L29.2138 29.7716C29.64 30.482 30.5614 30.7123 31.2717 30.2861C31.9821 29.8599 32.2125 28.9385 31.7862 28.2281L29.0775 23.7136C28.6257 22.9606 27.812 22.4999 26.9338 22.4999H23.9271L25.9271 18.4999H31C31.8284 18.4999 32.5 17.8283 32.5 16.9999C32.5 16.1715 31.8284 15.4999 31 15.4999H25.618C24.6711 15.4999 23.8054 16.0349 23.382 16.8819L22.1929 19.26L18.3676 15.7536L19.3729 14.7483C19.6805 14.4407 19.9025 14.0581 20.017 13.6384L21.4471 8.39456Z'
        fill='currentColor'
      /><path d='M11.5 15.4999C13.1569 15.4999 14.5 14.1567 14.5 12.4999C14.5 10.843 13.1569 9.49989 11.5 9.49989C9.84315 9.49989 8.5 10.843 8.5 12.4999C8.5 14.1567 9.84315 15.4999 11.5 15.4999Z'
        fill='currentColor'
      /><path d='M14 30.4999C14 29.9476 14.4477 29.4999 15 29.4999H25.5C26.0523 29.4999 26.5 29.9476 26.5 30.4999C26.5 31.0522 26.0523 31.4999 25.5 31.4999H15C14.4477 31.4999 14 31.0522 14 30.4999Z'
        fill='currentColor'
      /></svg> );
};
