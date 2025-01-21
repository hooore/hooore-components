import type { LogoList2Props } from "../../types/template-types/logo-list-2";
export type LogoList2RendererProps = LogoList2Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function LogoList2(props: LogoList2RendererProps): import("react/jsx-runtime").JSX.Element;
