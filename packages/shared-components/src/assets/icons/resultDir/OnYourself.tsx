
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M19.4524 13.239C19.4524 12.8792 19.2605 12.5443 18.9399 12.381C16.5363 11.1567 13.8122 10.7264 11.1437 11.1705L10.5412 11.2709C9.94116 11.3707 9.5 11.9054 9.5 12.5329V26.7321C9.5 27.5816 10.2005 28.2512 11.0208 28.1861L12.2528 28.0883C14.6969 27.8942 17.1424 28.446 19.2853 29.675C20.0407 30.1083 20.9593 30.1083 21.7147 29.675C23.8576 28.446 26.3031 27.8942 28.7472 28.0883L29.9792 28.1861C30.7995 28.2512 31.5 27.5816 31.5 26.7321V12.5329C31.5 11.9054 31.0588 11.3707 30.4588 11.2709L29.8563 11.1705C27.1878 10.7264 24.4637 11.1567 22.0601 12.381C21.7395 12.5443 21.5476 12.8792 21.5476 13.239V25.5046C21.5476 26.1019 21.0786 26.5862 20.5 26.5862C19.9214 26.5862 19.4524 26.1019 19.4524 25.5046V13.239Z'
        fill='currentColor'
      /></svg> );
};
