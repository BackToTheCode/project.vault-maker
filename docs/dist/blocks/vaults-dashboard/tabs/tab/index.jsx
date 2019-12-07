"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const rebass_1 = require("rebass");
const styles_1 = __importDefault(require("./styles"));
// Create GridContainer from box
exports.Tab = props => {
    const { children, isActive } = props;
    const { active, text } = styles_1.default;
    return (<rebass_1.Text variant="body.regular" sx={{ ...text, ...(isActive ? active : {}) }}>
      {children}
    </rebass_1.Text>);
};
//# sourceMappingURL=index.jsx.map