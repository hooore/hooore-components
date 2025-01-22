import type { Gallery1Props } from '../../types/template-types/gallery-1';
export type Gallery1RendererProps = Gallery1Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function Gallery1(props: Gallery1RendererProps): import("react/jsx-runtime").JSX.Element;
