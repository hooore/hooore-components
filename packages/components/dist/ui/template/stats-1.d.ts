import type { Stats1Props } from '../../types/template-types/stats-1';
export type Stats1RendererProps = Stats1Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function Stats1(props: Stats1RendererProps): import("react/jsx-runtime").JSX.Element;
