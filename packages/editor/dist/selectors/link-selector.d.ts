export declare function isValidUrl(url: string): boolean;
export declare function getUrlFromString(str: string): string | null | undefined;
interface LinkSelectorProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
export declare const LinkSelector: ({ open, onOpenChange }: LinkSelectorProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
