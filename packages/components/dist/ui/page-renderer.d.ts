import type { PageContent } from "../types/page-content";
import type { PageRendererComponentProps } from "./types";
export declare function PageRendererComponent(props: PageRendererComponentProps): import("react/jsx-runtime").JSX.Element | null;
export type PageRendererProps = {
    contents: PageContent[];
    disableLink?: boolean;
    projectLogo?: string;
};
export declare function PageRenderer({ contents, disableLink, projectLogo, }: PageRendererProps): import("react/jsx-runtime").JSX.Element[];
