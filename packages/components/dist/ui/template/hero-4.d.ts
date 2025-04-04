import type { Hero4Props, Hero4Slug } from '../../types/template-types/hero-4';
import type { AdditionalPageRendererComponentProps, ComponentRenderer } from '../types';
export type Hero4RendererProps = Hero4Props & AdditionalPageRendererComponentProps;
export declare function Hero4(props: Hero4RendererProps): import("react/jsx-runtime").JSX.Element;
export declare const HERO_4_META: ComponentRenderer<Hero4Slug, Hero4RendererProps>;
