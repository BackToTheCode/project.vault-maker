"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const rebass_1 = require("rebass");
const mark_maker_svg_1 = __importDefault(require("../../../../public/images/mark-maker.svg"));
const styles_1 = __importDefault(require("./styles"));
exports.Logo = ({ image }) => {
    return (<rebass_1.Box width={styles_1.default.container}>
      <rebass_1.Image src={image} sx={styles_1.default.logo}/>
    </rebass_1.Box>);
};
exports.Logo.defaultProps = {
    image: mark_maker_svg_1.default
};
//# sourceMappingURL=index.jsx.map