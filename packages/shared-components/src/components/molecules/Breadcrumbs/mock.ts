import { IBreadcrumb } from './Breadcrumb/Breadcrumb';

export const breadcrumbs: IBreadcrumb[] = [
  {
    href: '/pag1',
    children: 'Page 1'
  },
  {
    href: '/page2',
    children: 'Page 2'
  },
  {
    href: '/page-long',
    children: 'В этой вкладке больше 40 знаков, точно больше чем нужно'
  },
  {
    href: '/page3',
    children: 'Page 4'
  },
  {
    href: '/page5',
    children: 'Page 5'
  }
];

export default breadcrumbs;
