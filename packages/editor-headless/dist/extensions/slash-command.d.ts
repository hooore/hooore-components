import type { Editor, Range } from '@tiptap/core';
import { Extension } from '@tiptap/core';
import type { ReactNode, RefObject } from 'react';
import { type GetReferenceClientRect } from 'tippy.js';
declare const Command: Extension<any, any>;
declare const renderItems: (elementRef?: RefObject<Element> | null) => {
    onStart: (props: {
        editor: Editor;
        clientRect: DOMRect;
    }) => false | undefined;
    onUpdate: (props: {
        editor: Editor;
        clientRect: GetReferenceClientRect;
    }) => void;
    onKeyDown: (props: {
        event: KeyboardEvent;
    }) => any;
    onExit: () => void;
};
export interface SuggestionItem {
    title: string;
    description: string;
    icon: ReactNode;
    searchTerms?: string[];
    command?: (props: {
        editor: Editor;
        range: Range;
    }) => void;
}
export declare const createSuggestionItems: (items: SuggestionItem[]) => SuggestionItem[];
export declare const handleCommandNavigation: (event: KeyboardEvent) => true | undefined;
export { Command, renderItems };
