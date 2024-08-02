
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9.47583 11C9.47583 10.4477 9.92355 10 10.4758 10H12.2294C13.7559 10 15.0804 11.3245 15.0804 12.851V15H23.2867C24.6769 15 25.8533 16.1763 25.8533 17.5665V21.5931H25.9658C27.3948 21.5931 28.5245 22.7228 28.5245 24.1518V27.6074C28.5245 28.1597 28.9722 28.6074 29.5245 28.6074H29.7652C30.3175 28.6074 30.7652 29.0551 30.7652 29.6074C30.7652 30.1597 30.3175 30.6074 29.7652 30.6074H29.5245C27.8676 30.6074 26.5245 29.2643 26.5245 27.6074V24.1518C26.5245 23.8273 26.2903 23.5931 25.9658 23.5931H21.6308C20.7252 20.6307 17.9696 18.4761 14.7108 18.4761C14.1501 18.4761 13.6044 18.5398 13.0804 18.6605V12.851C13.0804 12.4291 12.6513 12 12.2294 12H10.4758C9.92355 12 9.47583 11.5523 9.47583 11Z'
        fill='currentColor'
      /><path fillRule='evenodd' clipRule='evenodd' d='M14.7109 31.4217C17.8649 31.4217 20.4217 28.8649 20.4217 25.7109C20.4217 22.5568 17.8649 20 14.7109 20C11.5568 20 9 22.5568 9 25.7109C9 28.8649 11.5568 31.4217 14.7109 31.4217ZM15.9773 25.7108C15.9773 26.4103 15.4103 26.9773 14.7108 26.9773C14.0114 26.9773 13.4443 26.4103 13.4443 25.7108C13.4443 25.0114 14.0114 24.4443 14.7108 24.4443C15.4103 24.4443 15.9773 25.0114 15.9773 25.7108Z'
        fill='currentColor'
      /></svg> );
};
