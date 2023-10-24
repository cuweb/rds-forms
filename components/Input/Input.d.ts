export interface InputProps {
    label: string;
    name: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    helper?: string;
    required?: boolean;
}
export declare const Input: (props: InputProps) => import("react/jsx-runtime").JSX.Element;
