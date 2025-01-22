import type { Blog1Props } from '../../types/template-types/blog-1';
export type Blog1RendererProps = Blog1Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function Blog1(props: Blog1RendererProps): import("react/jsx-runtime").JSX.Element;
