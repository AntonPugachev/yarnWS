
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M6.0001 2.74995C6.0001 2.39573 5.75227 2.0898 5.40576 2.01628C5.06011 1.94295 4.7103 2.12081 4.5658 2.44299L4.56426 2.44633C4.56226 2.45062 4.55842 2.45877 4.55275 2.47037C4.5414 2.49361 4.52282 2.53051 4.49704 2.57803C4.44527 2.67351 4.36584 2.80941 4.2594 2.96243C4.04176 3.27532 3.73538 3.62484 3.35275 3.86386C3.00144 4.08332 2.89456 4.54601 3.11401 4.89731C3.33346 5.24861 3.79615 5.35549 4.14746 5.13604C4.27205 5.05821 4.38956 4.97469 4.5001 4.8876V7.24995C4.5001 7.66417 4.83589 7.99995 5.2501 7.99995C5.66431 7.99995 6.0001 7.66417 6.0001 7.24995V2.74995ZM20.4995 18.75C20.4995 18.3357 20.1637 18 19.7495 18H10.7495C10.3353 18 9.99951 18.3357 9.99951 18.75C9.99951 19.1642 10.3353 19.5 10.7495 19.5H19.7495C20.1637 19.5 20.4995 19.1642 20.4995 18.75ZM20.4995 12.2436C20.4995 11.8294 20.1637 11.4936 19.7495 11.4936H10.7495C10.3353 11.4936 9.99951 11.8294 9.99951 12.2436C9.99951 12.6578 10.3353 12.9936 10.7495 12.9936H19.7495C20.1637 12.9936 20.4995 12.6578 20.4995 12.2436ZM20.4995 5.74995C20.4995 5.33574 20.1637 4.99995 19.7495 4.99995H10.7495C10.3353 4.99995 9.99951 5.33574 9.99951 5.74995C9.99951 6.16417 10.3353 6.49995 10.7495 6.49995H19.7495C20.1637 6.49995 20.4995 6.16417 20.4995 5.74995ZM5.15093 10.5198C4.84957 10.4667 4.47444 10.5862 4.28031 10.7803C3.98741 11.0732 3.51253 11.0732 3.21965 10.7803C2.92677 10.4874 2.92678 10.0125 3.21969 9.71965C3.77556 9.16381 4.65044 8.90835 5.41157 9.04266C5.809 9.11278 6.2173 9.29705 6.52722 9.6483C6.8426 10.0057 7 10.4726 7 11C7 11.6194 6.72895 12.08 6.39406 12.4204C6.1163 12.7028 5.76315 12.931 5.48826 13.1086L5.40874 13.16C5.21348 13.287 5.05428 13.397 4.92686 13.5H6.25C6.66421 13.5 7 13.8357 7 14.25C7 14.6642 6.6642 15 6.24999 15H3.75C3.33579 15 3 14.6642 3 14.25C3 12.9364 3.98385 12.2971 4.57505 11.9129L4.63522 11.8738C4.95259 11.6676 5.16843 11.5274 5.32469 11.3686C5.45855 11.2325 5.5 11.1306 5.5 11C5.5 10.7773 5.43865 10.6817 5.40247 10.6407C5.36083 10.5935 5.28475 10.5434 5.15093 10.5198ZM2.96967 21.2803C2.96967 21.2803 3.06251 21.364 2.97426 21.2848L2.97962 21.2901L2.9929 21.3027C3.00287 21.3121 3.01509 21.3232 3.02956 21.3359C3.05848 21.3612 3.09653 21.3927 3.14375 21.4281C3.2381 21.4988 3.36996 21.586 3.53959 21.6708C3.88131 21.8416 4.37043 22 5 22C5.63921 22 6.19596 21.8186 6.60132 21.4604C7.00922 21.1 7.21163 20.6031 7.19553 20.1009C7.18219 19.6846 7.02903 19.3053 6.76986 19C7.02903 18.6946 7.18219 18.3153 7.19553 17.899C7.21163 17.3968 7.00922 16.8999 6.60132 16.5395C6.19596 16.1813 5.63921 16 5 16C4.37043 16 3.88131 16.1583 3.53959 16.3291C3.36996 16.4139 3.2381 16.5011 3.14375 16.5718C3.09653 16.6072 3.05848 16.6387 3.02956 16.664C3.01509 16.6767 3.00287 16.6878 2.9929 16.6972L2.97962 16.7098L2.97423 16.7151L2.97189 16.7175L2.97091 16.7184L2.96967 16.7196C2.67678 17.0125 2.67678 17.4874 2.96967 17.7803C3.2586 18.0692 3.72462 18.0731 4.01834 17.792C4.0217 17.7891 4.03018 17.782 4.04375 17.7718C4.0744 17.7488 4.13004 17.711 4.21041 17.6708C4.36869 17.5916 4.62957 17.5 5 17.5C5.36079 17.5 5.53601 17.5998 5.60812 17.6636C5.67768 17.725 5.69823 17.7906 5.6963 17.8509C5.69423 17.9155 5.66403 18.0026 5.57278 18.0818C5.4845 18.1583 5.30962 18.25 5 18.25C4.58579 18.25 4.25 18.5857 4.25 19C4.25 19.4142 4.58579 19.75 5 19.75C5.30962 19.75 5.4845 19.8416 5.57278 19.9181C5.66403 19.9973 5.69423 20.0844 5.6963 20.149C5.69823 20.2093 5.67768 20.2749 5.60812 20.3364C5.53601 20.4001 5.36079 20.5 5 20.5C4.62957 20.5 4.36869 20.4083 4.21041 20.3291C4.13004 20.2889 4.0744 20.2511 4.04375 20.2281C4.03018 20.2179 4.0217 20.2108 4.01834 20.2079C3.72462 19.9268 3.2586 19.9307 2.96967 20.2196C2.67678 20.5125 2.67678 20.9874 2.96967 21.2803ZM2.97189 16.7175L2.97091 16.7184C2.9776 16.7129 3.17182 16.5514 2.97189 16.7175Z'
        fill='currentColor'
      /></svg> );
};