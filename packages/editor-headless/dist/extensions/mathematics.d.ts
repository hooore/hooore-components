import { Node } from '@tiptap/core';
import { EditorState } from '@tiptap/pm/state';
import { type KatexOptions } from 'katex';
export interface MathematicsOptions {
    /**
     * By default LaTeX decorations can render when mathematical expressions are not inside a code block.
     * @param state - EditorState
     * @param pos - number
     * @returns boolean
     */
    shouldRender: (state: EditorState, pos: number) => boolean;
    /**
     * @see https://katex.org/docs/options.html
     */
    katexOptions?: KatexOptions;
    HTMLAttributes: Record<string, any>;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        LatexCommand: {
            /**
             * Set selection to a LaTex symbol
             */
            setLatex: ({ latex }: {
                latex: string;
            }) => ReturnType;
            /**
             * Unset a LaTex symbol
             */
            unsetLatex: () => ReturnType;
        };
    }
}
/**
 * This extension adds support for mathematical symbols with LaTex expression.
 *
 * NOTE: Don't forget to import `katex/dist/katex.min.css` CSS for KaTex styling.
 *
 * @see https://katex.org/
 */
export declare const Mathematics: Node<MathematicsOptions, any>;
