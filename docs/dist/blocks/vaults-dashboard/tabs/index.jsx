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
const tab_1 = require("./tab");
// Create GridContainer from box
exports.Tabs = props => {
    const { sx } = props;
    const { container, tabs } = styles_1.default;
    return (<vm_ui_library_1.Container sx={{ ...container, ...sx }}>
      <rebass_1.Box sx={tabs}>
        <tab_1.Tab isActive={true}>Open</tab_1.Tab>
        <tab_1.Tab>Closed</tab_1.Tab>
        <tab_1.Tab />
      </rebass_1.Box>
    </vm_ui_library_1.Container>);
};
//# sourceMappingURL=index.jsx.map