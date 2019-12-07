/** @jsx jsx */
import { Container } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import { Box } from 'rebass';
import styles from './styles';
import { Tab } from './tab';
// Create GridContainer from box
export const Tabs = props => {
    const { sx } = props;
    const { container, tabs } = styles;
    return (<Container sx={{ ...container, ...sx }}>
      <Box sx={tabs}>
        <Tab isActive={true}>Open</Tab>
        <Tab>Closed</Tab>
        <Tab />
      </Box>
    </Container>);
};
//# sourceMappingURL=index.jsx.map