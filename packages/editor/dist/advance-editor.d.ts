import { type JSONContent } from '@hooore/editor-headless/components';
export type TailwindAdvancedEditorProps = {
    initialValue?: JSONContent;
    immediatelyRender?: boolean;
    onChange: (value: JSONContent) => void;
};
export declare const TailwindAdvancedEditor: ({ initialValue, immediatelyRender, onChange, }: TailwindAdvancedEditorProps) => import("react/jsx-runtime").JSX.Element;
export default TailwindAdvancedEditor;
