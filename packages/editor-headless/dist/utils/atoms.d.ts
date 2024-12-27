import type { Range } from '@tiptap/core';
export declare const queryAtom: import("jotai").PrimitiveAtom<string> & {
    init: string;
};
export declare const rangeAtom: import("jotai").PrimitiveAtom<Range | null> & {
    init: Range | null;
};
