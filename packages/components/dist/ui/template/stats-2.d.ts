import type { Stats2Props } from '../../types/template-types/stats-2';
export type Stats2RendererProps = Stats2Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function Stats2(props: Stats2RendererProps): import("react/jsx-runtime").JSX.Element;
