import type { EditorInstance } from '../components';
export declare function isValidUrl(url: string): boolean;
export declare function getUrlFromString(str: string): string | null | undefined;
export declare const getPrevText: (editor: EditorInstance, position: number) => string;
export declare const getAllContent: (editor: EditorInstance) => string;
