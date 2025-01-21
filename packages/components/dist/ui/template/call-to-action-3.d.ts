import type { CallToAction3Props } from "../../types/template-types/call-to-action-3";
export type CallToAction3RendererProps = CallToAction3Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function CallToAction3(props: CallToAction3RendererProps): import("react/jsx-runtime").JSX.Element;
