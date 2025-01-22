import type { Hero1Props } from '../../types/template-types/hero-1';
export type Hero1RendererProps = Hero1Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function Hero1(props: Hero1RendererProps): import("react/jsx-runtime").JSX.Element;
