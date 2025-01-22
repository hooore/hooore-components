import type { Blog2Props } from '../../types/template-types/blog-2';
export type Blog2RendererProps = Blog2Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function Blog2(props: Blog2RendererProps): import("react/jsx-runtime").JSX.Element;
