import  { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import './BannerImage.scss';

import BrokenMagnifier from '../../../../assets/illustrations/broken-magnifier.png';
import CloseEntrance from '../../../../assets/illustrations/close-entrance.png';
import Default from '../../../../assets/illustrations/default.png';
import Donut from '../../../../assets/illustrations/donut.png';
import Donut2 from '../../../../assets/illustrations/donut-2.png';
import Empty from '../../../../assets/illustrations/empty.png';
import Ghost from '../../../../assets/illustrations/ghost.png';
import MagnifierFolder from '../../../../assets/illustrations/magnifier-folder.png';
import MagnifierNotAvailable from '../../../../assets/illustrations/magnifier-not-available.png';
import MagnifierZero from '../../../../assets/illustrations/magnifier-zero.png';
import NotAvailable from '../../../../assets/illustrations/not-available.png';
import Notifications from '../../../../assets/illustrations/notifications.png';
import Settings from '../../../../assets/illustrations/settings.png';
import Work from '../../../../assets/illustrations/work.png';

export type BannerImageVariant =
  'broken-magnifier' |
  'close-entrance' |
  'default' |
  'donut' |
  'donut-2' |
  'empty' |
  'ghost' |
  'magnifier-folder' |
  'magnifier-not-available' |
  'magnifier-zero' |
  'not-available' |
  'notifications' |
  'settings' |
  'work';

export interface BannerImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  /** Использовать встроеное изображение */
  variant?: BannerImageVariant;
}

export const BannerImageMap: { [key in BannerImageVariant]: string } = {
  'broken-magnifier': BrokenMagnifier,
  'close-entrance': CloseEntrance,
  'default': Default,
  'donut': Donut,
  'donut-2': Donut2,
  'empty': Empty,
  'ghost': Ghost,
  'magnifier-folder': MagnifierFolder,
  'magnifier-not-available': MagnifierNotAvailable,
  'magnifier-zero': MagnifierZero,
  'not-available': NotAvailable,
  'notifications': Notifications,
  'settings': Settings,
  'work': Work
};

export const BannerImage = ({ variant, src, ...props }: BannerImageProps) => {
  const source = variant ? BannerImageMap[variant] : src;

  return (
    <img className='banner-image' src={source} role='presentation' {...props} />
  );
};
