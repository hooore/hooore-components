import type { Content1Props } from "../../types/template-types/content-1";
export type Content1RendererProps = Content1Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function Content1(props: Content1RendererProps): import("react/jsx-runtime").JSX.Element;
