"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const regular_1 = require("../regular");
const styles_1 = __importDefault(require("./styles"));
exports.LargeButton = props => {
    const { sx } = props;
    const { large } = styles_1.default;
    return <regular_1.Button {...props} sx={{ ...large, ...sx }}></regular_1.Button>;
};
exports.LargeButton.displayName = 'LargeButton';
//# sourceMappingURL=index.jsx.map