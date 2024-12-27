export interface BubbleColorMenuItem {
    name: string;
    color: string;
}
interface ColorSelectorProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
export declare const ColorSelector: ({ open, onOpenChange }: ColorSelectorProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
