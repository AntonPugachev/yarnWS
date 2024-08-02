
import { IStatusIconProps } from './types';
import { statusIconSize } from './helpers';
/* eslint-disable max-len */

export default (props: IStatusIconProps) => {
  const size = props.size ? statusIconSize[props.size] : '20';
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM9.99942 3.67045C8.52926 3.67045 7.33745 4.86225 7.33745 6.33243C7.33745 7.8026 8.52926 8.9944 9.99942 8.9944C11.4696 8.9944 12.6614 7.8026 12.6614 6.33243C12.6614 4.86225 11.4696 3.67045 9.99942 3.67045ZM9.1767 10.7732C9.23964 10.6233 9.22128 10.4517 9.12809 10.3185C9.12809 10.3185 8.98682 10.1005 8.90209 9.94978C8.85906 9.87322 8.77046 9.83294 8.68489 9.85269C6.77134 10.2944 5.27938 11.6822 5.01019 13.485C4.97167 13.743 5.04762 14.0006 5.21429 14.2012C6.26842 15.4702 8.08122 16.3296 9.99961 16.3296C11.9124 16.3296 13.7389 15.4589 14.7868 14.1985C14.9528 13.9987 15.0278 13.7425 14.9907 13.4855C14.7237 11.6377 13.1716 10.2365 11.2006 9.82679C11.1143 9.80884 11.0264 9.85233 10.9846 9.93003C10.8997 10.0882 10.7526 10.3185 10.7526 10.3185C10.6594 10.4517 10.641 10.6233 10.704 10.7732L11.4736 12.6056C11.548 12.7828 11.5078 12.9875 11.3719 13.1235L10.275 14.2203C10.0902 14.4052 9.79055 14.4052 9.60574 14.2203L8.50881 13.1234C8.37286 12.9875 8.33267 12.7828 8.40712 12.6055L9.1767 10.7732Z'
        fill='currentColor'
      />
    </svg>
  );
};
