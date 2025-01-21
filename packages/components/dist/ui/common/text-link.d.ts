export declare function TextLink<T extends React.ElementType = "a">(props: {
    as?: T;
    children?: string;
    autoConvert?: boolean;
} & Omit<React.ComponentPropsWithoutRef<T>, "children">): string | import("react/jsx-runtime").JSX.Element | undefined;
