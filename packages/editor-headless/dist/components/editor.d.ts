import type { EditorProviderProps, JSONContent } from "@tiptap/react";
import type { FC, ReactNode } from "react";
export interface EditorProps {
    readonly children: ReactNode;
    readonly className?: string;
}
interface EditorRootProps {
    readonly children: ReactNode;
}
export declare const EditorRoot: FC<EditorRootProps>;
export type EditorContentProps = Omit<EditorProviderProps, "content"> & {
    readonly children?: ReactNode;
    readonly className?: string;
    readonly initialContent?: JSONContent;
};
export declare const EditorContent: import("react").ForwardRefExoticComponent<Omit<EditorProviderProps, "content"> & {
    readonly children?: ReactNode;
    readonly className?: string;
    readonly initialContent?: JSONContent;
} & import("react").RefAttributes<HTMLDivElement>>;
export {};
