import type { FeatureItem1Props, FeaturesList1Props } from '../../types/template-types/features-list-1';
import type { AdditionalPageRendererComponentProps } from '../types';
export declare function FeatureItem(props: FeatureItem1Props & {
    className?: string;
    direction?: 'vertical' | 'horizontal';
    footer?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export type FeaturesList1RendererProps = FeaturesList1Props & AdditionalPageRendererComponentProps;
export declare function FeaturesList1(props: FeaturesList1RendererProps): import("react/jsx-runtime").JSX.Element;
