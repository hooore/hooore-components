import { Extension } from '@tiptap/core';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        customkeymap: {
            /**
             * Select text between node boundaries
             */
            selectTextWithinNodeBoundaries: () => ReturnType;
        };
    }
}
declare const CustomKeymap: Extension<any, any>;
export default CustomKeymap;
