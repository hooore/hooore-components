import type { CallToAction1Props } from '../../types/template-types/call-to-action-1';
export type CallToAction1RendererProps = CallToAction1Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function CallToAction1(props: CallToAction1RendererProps): import("react/jsx-runtime").JSX.Element;
