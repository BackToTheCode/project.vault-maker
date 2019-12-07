"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const vm_ui_library_1 = require("@backtothecode/vm-ui-library");
const core_1 = require("@emotion/core");
const rebass_1 = require("rebass");
const styles_1 = __importDefault(require("./styles"));
exports.Vaults = props => {
    const { sx } = props;
    const { vault, vaultContainer } = styles_1.default;
    return (<vm_ui_library_1.GridContainer sx={{ ...vaultContainer, ...sx }}>
      <rebass_1.Box sx={vault}/>
      <rebass_1.Box sx={vault}/>
    </vm_ui_library_1.GridContainer>);
};
//# sourceMappingURL=index.jsx.map