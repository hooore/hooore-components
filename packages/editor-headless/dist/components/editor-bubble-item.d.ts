import type { Editor } from '@tiptap/react';
import type { ReactNode } from 'react';
interface EditorBubbleItemProps {
    readonly children: ReactNode;
    readonly asChild?: boolean;
    readonly onSelect?: (editor: Editor) => void;
}
export declare const EditorBubbleItem: import("react").ForwardRefExoticComponent<EditorBubbleItemProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "onSelect"> & import("react").RefAttributes<HTMLDivElement>>;
export default EditorBubbleItem;
