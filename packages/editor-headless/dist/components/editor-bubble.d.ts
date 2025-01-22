import type { BubbleMenuProps } from "@tiptap/react";
import type { ReactNode } from "react";
export interface EditorBubbleProps extends Omit<BubbleMenuProps, "editor"> {
    readonly children: ReactNode;
}
export declare const EditorBubble: import("react").ForwardRefExoticComponent<EditorBubbleProps & import("react").RefAttributes<HTMLDivElement>>;
export default EditorBubble;
