"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const rebass_1 = require("rebass");
const styles_1 = __importDefault(require("./styles"));
exports.Title = props => {
    const { children, sx } = props;
    const { base } = styles_1.default;
    return (<rebass_1.Heading variant="heading.extra" sx={{ ...base, ...sx }}>{children}</rebass_1.Heading>);
};
exports.Title.displayName = 'Title';
//# sourceMappingURL=index.jsx.map