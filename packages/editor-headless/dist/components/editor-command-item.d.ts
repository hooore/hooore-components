import type { Editor, Range } from '@tiptap/core';
interface EditorCommandItemProps {
    readonly onCommand: ({ editor, range, }: {
        editor: Editor;
        range: Range;
    }) => void;
}
export declare const EditorCommandItem: import("react").ForwardRefExoticComponent<EditorCommandItemProps & Omit<{
    children?: React.ReactNode;
} & Omit<import("react").HTMLAttributes<HTMLDivElement>, "onSelect" | "disabled" | "value"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    forceMount?: boolean;
} & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export declare const EditorCommandEmpty: import("react").ForwardRefExoticComponent<{
    children?: React.ReactNode;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
export default EditorCommandItem;
