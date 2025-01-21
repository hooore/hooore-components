import type { Step1Props } from "../../types/template-types/step-1";
export type Step1RendererProps = Step1Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function Step1(props: Step1RendererProps): import("react/jsx-runtime").JSX.Element;
