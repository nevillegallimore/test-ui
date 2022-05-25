// import external dependencies
import React, { ReactNode, MouseEventHandler } from 'react';

////////////////////////////////////////////////////////////////////////////////////////////////////

export type ButtonType = 'primary' | 'secondary';

export interface ButtonProperties {
    children: ReactNode | null,
    onClick: MouseEventHandler,
    type: ButtonType,
}

export const Button = ({ children, onClick, type }: ButtonProperties) => {
    const getClassNames = () => {
        switch (type) {
            case 'primary':
                return 'button button-primary';
            case 'secondary':
                return 'button button-secondary';
            default:
                return 'button';
        }
    };

    return (
        <button className={getClassNames()}>{children}</button>
    );
};

Button.displayName = 'Button';
Button.defaultProps = {
    children: null,
    onClick: () => undefined,
    type: 'primary',
};
