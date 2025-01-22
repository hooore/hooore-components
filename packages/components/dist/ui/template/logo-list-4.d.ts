import type { LogoList4Props } from '../../types/template-types/logo-list-4';
export type LogoList4RendererProps = LogoList4Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function LogoList4(props: LogoList4RendererProps): import("react/jsx-runtime").JSX.Element;
