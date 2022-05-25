import { ReactNode, MouseEventHandler } from 'react';
export declare type ButtonType = 'primary' | 'secondary';
export interface ButtonProperties {
    children: ReactNode | null;
    onClick: MouseEventHandler;
    type: ButtonType;
}
export declare const Button: {
    ({ children, onClick, type }: ButtonProperties): JSX.Element;
    displayName: string;
    defaultProps: {
        children: null;
        onClick: () => undefined;
        type: string;
    };
};
//# sourceMappingURL=button.d.ts.map