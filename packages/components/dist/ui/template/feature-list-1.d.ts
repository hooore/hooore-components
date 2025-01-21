import type { FeatureItemProps, FeaturesList1Props } from "../../types/template-types/features-list-1";
export declare function FeatureItem(props: FeatureItemProps & {
    className?: string;
    direction?: "vertical" | "horizontal";
    footer?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export type FeaturesList1RendererProps = FeaturesList1Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function FeaturesList1(props: FeaturesList1RendererProps): import("react/jsx-runtime").JSX.Element;
