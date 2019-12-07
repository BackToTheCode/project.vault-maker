/** @jsx jsx */
import { Container, WideContainer } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import { Title } from '../../elements/title';
import styles from './styles';
import { Tabs } from './tabs';
import { Vaults } from './vaults';
export const Dashboard = props => {
    const { children, isConnected, address } = props;
    const { container, width } = styles;
    // const [isTransitioning, setTransitioning] = useState(false)
    // useEffect(() => {
    //   setTransitioning(true);
    // })
    return (<WideContainer sx={container}>
      <Container sx={{ mt: '150px', width: '900px', maxWidth: '95%', mb: '50px' }}>
        <Title>My Vaults</Title>
      </Container>

      <Tabs sx={width}/>
      <Vaults sx={width}/>
    </WideContainer>);
};
//# sourceMappingURL=index.jsx.map