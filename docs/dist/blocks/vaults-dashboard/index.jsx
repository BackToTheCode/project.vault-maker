"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const vm_ui_library_1 = require("@backtothecode/vm-ui-library");
const core_1 = require("@emotion/core");
const title_1 = require("../../elements/title");
const styles_1 = __importDefault(require("./styles"));
const tabs_1 = require("./tabs");
const vaults_1 = require("./vaults");
exports.Dashboard = props => {
    const { children, isConnected, address } = props;
    const { container, width } = styles_1.default;
    // const [isTransitioning, setTransitioning] = useState(false)
    // useEffect(() => {
    //   setTransitioning(true);
    // })
    return (<vm_ui_library_1.WideContainer sx={container}>
      <vm_ui_library_1.Container sx={{ mt: '150px', width: '900px', maxWidth: '95%', mb: '50px' }}>
        <title_1.Title>My Vaults</title_1.Title>
      </vm_ui_library_1.Container>

      <tabs_1.Tabs sx={width}/>
      <vaults_1.Vaults sx={width}/>
    </vm_ui_library_1.WideContainer>);
};
//# sourceMappingURL=index.jsx.map