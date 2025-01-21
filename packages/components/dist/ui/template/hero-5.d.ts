import type { Hero5Props, Hero5Slug } from "../../types/template-types/hero-5";
import type { ComponentRenderer } from "../types";
export type Hero5RendererProps = Hero5Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function Hero5(props: Hero5RendererProps): import("react/jsx-runtime").JSX.Element;
export declare const HERO_5_META: ComponentRenderer<Hero5Slug, Hero5RendererProps>;
