import type { Team1Props } from '../../types/template-types/team-1';
export type Team1RendererProps = Team1Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
    logo?: string;
};
export declare function Team1(props: Team1RendererProps): import("react/jsx-runtime").JSX.Element;
