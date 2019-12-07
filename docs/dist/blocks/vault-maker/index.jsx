"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("next/router");
const react_1 = __importStar(require("react"));
const rebass_1 = require("rebass");
const styles_1 = __importDefault(require("./styles"));
// import vaultIcon from '../../../public/images/vault.svg';
const savings_svg_1 = __importDefault(require("../../../public/images/savings.svg"));
exports.VaultMaker = () => {
    const { grid, gridItem, heroItem, makerItem, vault } = styles_1.default;
    const [isTransitioning, setTransitioning] = react_1.useState(false);
    const router = router_1.useRouter();
    react_1.useEffect(() => {
        setTimeout(() => {
            setTransitioning(true);
            //     setTimeout(() => {
            //       router.push('/dashboard')
            //     }, 500)
        }, 2500);
    });
    return (<rebass_1.Box sx={grid}>
      <rebass_1.Flex sx={{ ...gridItem, ...heroItem, ...(heroItem.transitioning(isTransitioning)) }}>
        <rebass_1.Image src={savings_svg_1.default} sx={{ ...vault, ...(vault.transitioning(isTransitioning)) }}/>
      </rebass_1.Flex>
      <rebass_1.Box sx={{ ...gridItem, ...makerItem }}/>
    </rebass_1.Box>);
};
//# sourceMappingURL=index.jsx.map