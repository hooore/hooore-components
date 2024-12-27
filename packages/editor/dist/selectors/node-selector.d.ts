import { useEditor } from '@hooore/editor-headless/components';
import { type LucideIcon } from 'lucide-react';
export type SelectorItem = {
    name: string;
    icon: LucideIcon;
    command: (editor: ReturnType<typeof useEditor>['editor']) => void;
    isActive: (editor: ReturnType<typeof useEditor>['editor']) => boolean | undefined;
};
interface NodeSelectorProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
export declare const NodeSelector: ({ open, onOpenChange }: NodeSelectorProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
