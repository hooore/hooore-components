import type { Blog3Props } from '../../types/template-types/blog-3';
export type Blog3RendererProps = Blog3Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function Blog3(props: Blog3RendererProps): import("react/jsx-runtime").JSX.Element;
