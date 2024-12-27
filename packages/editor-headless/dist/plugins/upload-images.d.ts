import { Plugin } from '@tiptap/pm/state';
import { DecorationSet, type EditorView } from '@tiptap/pm/view';
export declare const UploadImagesPlugin: ({ imageClass }: {
    imageClass: string;
}) => Plugin<DecorationSet>;
export interface ImageUploadOptions {
    validateFn?: (file: File) => void;
    onUpload: (file: File) => Promise<unknown>;
}
export declare const createImageUpload: ({ validateFn, onUpload }: ImageUploadOptions) => UploadFn;
export type UploadFn = (file: File, view: EditorView, pos: number) => void;
export declare const handleImagePaste: (view: EditorView, event: ClipboardEvent, uploadFn: UploadFn) => boolean;
export declare const handleImageDrop: (view: EditorView, event: DragEvent, moved: boolean, uploadFn: UploadFn) => boolean;
