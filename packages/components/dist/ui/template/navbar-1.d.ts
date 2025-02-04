import type { Navbar1Props } from '../../types/template-types/navbar-1';
import { type ButtonProps } from '../common/button';
import type { AdditionalPageRendererComponentProps } from '../types';
export type NavButtonProps = ButtonProps & {
    isActive?: boolean;
};
export declare function NavButton({ isActive, children, className, ...props }: NavButtonProps): import("react/jsx-runtime").JSX.Element;
export type Navbar1RendererProps = Navbar1Props & AdditionalPageRendererComponentProps;
export declare function Navbar1(props: Navbar1RendererProps): import("react/jsx-runtime").JSX.Element;
