"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const rebass_1 = require("rebass");
const styles_1 = __importDefault(require("./styles"));
/**
 * Component for showing a users address
 *  and whether they are connected to the ethereum network
 *
 * @param props my prop
 * const age = 21
 * const name = 'Jitendra Nirnejak'
 * return (
 *   <User age={age} name={name} />
 * )
 */
exports.Address = props => {
    const { isConnected, address } = props;
    const { container, indicator } = styles_1.default;
    return (<rebass_1.Box sx={container}>
      <rebass_1.Box sx={{ ...indicator, ...(indicator.connected(isConnected)) }}/>
      <rebass_1.Text sx={styles_1.default.address} variant={'body.regular'}>
        {isConnected ? address : 'Not connected'}
      </rebass_1.Text>
    </rebass_1.Box>);
};
exports.Address.displayName = 'Address';
//# sourceMappingURL=index.jsx.map