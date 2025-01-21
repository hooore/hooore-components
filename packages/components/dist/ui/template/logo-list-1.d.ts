import type { LogoList1Props } from "../../types/template-types/logo-list-1";
export type LogoList1RendererProps = LogoList1Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function LogoList1(props: LogoList1RendererProps): import("react/jsx-runtime").JSX.Element;
