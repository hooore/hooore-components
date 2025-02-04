import type { HowItWorks1Props, HowItWorksStepProps } from '../../types/template-types/how-it-works-1';
import type { AdditionalPageRendererComponentProps } from '../types';
export declare function HowItWorksStep(props: HowItWorksStepProps & {
    number?: number;
}): import("react/jsx-runtime").JSX.Element;
export type HowItWorks1RendererProps = HowItWorks1Props & AdditionalPageRendererComponentProps;
export declare function HowItWorks1(props: HowItWorks1RendererProps): import("react/jsx-runtime").JSX.Element[] | undefined;
