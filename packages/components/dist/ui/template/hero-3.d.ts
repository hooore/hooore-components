import type { Hero3Props, Hero3Slug } from "../../types/template-types/hero-3";
import type { ComponentRenderer } from "../types";
export type Hero3RendererProps = Hero3Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function Hero3(props: Hero3RendererProps): import("react/jsx-runtime").JSX.Element;
export declare const HERO_3_META: ComponentRenderer<Hero3Slug, Hero3RendererProps>;
