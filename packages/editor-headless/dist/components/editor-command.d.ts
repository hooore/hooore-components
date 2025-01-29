import type { Range } from '@tiptap/core';
import type { FC } from 'react';
export declare const EditorCommandTunnelContext: import("react").Context<{
    In: ({ children }: {
        children: React.ReactNode;
    }) => null;
    Out: () => JSX.Element;
}>;
interface EditorCommandOutProps {
    readonly query: string;
    readonly range: Range;
}
export declare const EditorCommandOut: FC<EditorCommandOutProps>;
export declare const EditorCommand: import("react").ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & import("react").HTMLAttributes<HTMLDivElement> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    vimBindings?: boolean;
} & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export declare const EditorCommandList: import("react").ForwardRefExoticComponent<{
    children?: React.ReactNode;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
export {};
