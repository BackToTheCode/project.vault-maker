"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const rebass_1 = require("rebass");
const styles_1 = __importDefault(require("./styles"));
exports.Button = (props) => {
    const { children, isDisabled, onClick, sx, variant } = props;
    const { base, disabled } = styles_1.default;
    return (<rebass_1.Button onClick={onClick} sx={{ ...base, ...(isDisabled ? disabled : {}), ...sx }} variant={variant}>
      {children}
    </rebass_1.Button>);
};
exports.Button.defaultProps = {
    variant: 'primary'
};
exports.Button.displayName = 'Button';
//# sourceMappingURL=index.jsx.map