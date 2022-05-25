"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
// import external dependencies
const react_1 = __importDefault(require("react"));
const Button = ({ children, onClick, type }) => {
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
    return (<button className={getClassNames()}>{children}</button>);
};
exports.Button = Button;
exports.Button.displayName = 'Button';
exports.Button.defaultProps = {
    children: null,
    onClick: () => undefined,
    type: 'primary',
};
//# sourceMappingURL=button.component.jsx.map