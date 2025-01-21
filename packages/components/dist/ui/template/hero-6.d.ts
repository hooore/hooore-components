import type { Hero6Props } from "../../types/template-types/hero-6";
export type Hero6RendererProps = Hero6Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function Hero6(props: Hero6RendererProps): import("react/jsx-runtime").JSX.Element;
