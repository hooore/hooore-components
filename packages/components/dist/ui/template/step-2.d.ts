import type { Step2Props } from '../../types/template-types/step-2';
export type Step2RendererProps = Step2Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function Step2(props: Step2RendererProps): import("react/jsx-runtime").JSX.Element;
