"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const vault_maker_ui_1 = require("@backtothecode/vault-maker-ui");
const vm_ui_library_1 = require("@backtothecode/vm-ui-library");
const core_1 = require("@emotion/core");
const router_1 = require("next/router");
const react_1 = require("react");
const rebass_1 = require("rebass");
const address_1 = require("./address");
const logo_1 = require("./logo");
const styles_1 = __importDefault(require("./styles"));
exports.Header = props => {
    const { children, isConnected, address } = props;
    const { addressContainer, container, logoContainer, navContainer, navItem, navItemActive } = styles_1.default;
    const router = router_1.useRouter();
    const [isTransitioning, setTransitioning] = react_1.useState(false);
    react_1.useEffect(() => {
        setTransitioning(true);
    });
    const routeDashboard = () => {
        router.push('/vaults');
    };
    const routeMaker = () => {
        router.push('/');
    };
    return (<vault_maker_ui_1.Container variant="container.wide" sx={container}>
      <rebass_1.Flex sx={logoContainer}>
        <logo_1.Logo />
        <rebass_1.Flex sx={navContainer}>
          <vm_ui_library_1.Button onClick={routeMaker} variant={'text'} sx={{ ...navItem, ...navItemActive }}>Make</vm_ui_library_1.Button>
          <vm_ui_library_1.Button onClick={routeDashboard} variant={'text'} sx={navItem}>Vaults</vm_ui_library_1.Button>
        </rebass_1.Flex>
      </rebass_1.Flex>
      <rebass_1.Box sx={addressContainer}>
        <address_1.Address {...props}/>
      </rebass_1.Box>
    </vault_maker_ui_1.Container>);
};
exports.Header.defaultProps = {
    isConnected: false
};
//# sourceMappingURL=index.jsx.map