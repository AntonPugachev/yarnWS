import { SVGProps } from 'react';
export interface svgWithColor extends SVGProps<SVGSVGElement> {
    color1?: string;
    color2?: string;
    color3?: string;
}
declare const _default: (props: svgWithColor) => import("react/jsx-runtime").JSX.Element;
export default _default;
