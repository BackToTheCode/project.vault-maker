/** @jsx jsx */
import { GridContainer } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import { Box } from 'rebass';
import styles from './styles';
export const Vaults = props => {
    const { sx } = props;
    const { vault, vaultContainer } = styles;
    return (<GridContainer sx={{ ...vaultContainer, ...sx }}>
      <Box sx={vault}/>
      <Box sx={vault}/>
    </GridContainer>);
};
//# sourceMappingURL=index.jsx.map