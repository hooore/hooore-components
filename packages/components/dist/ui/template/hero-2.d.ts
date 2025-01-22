import type { Hero2Props } from '../../types/template-types/hero-2';
export type Hero2RendererProps = Hero2Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function Hero2(props: Hero2RendererProps): import("react/jsx-runtime").JSX.Element;
