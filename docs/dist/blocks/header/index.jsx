/** @jsx jsx */
import { Container } from '@backtothecode/vault-maker-ui';
import { Button } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Box, Flex } from 'rebass';
import { Address } from './address';
import { Logo } from './logo';
import styles from './styles';
export const Header = props => {
    const { children, isConnected, address } = props;
    const { addressContainer, container, logoContainer, navContainer, navItem, navItemActive } = styles;
    const router = useRouter();
    const [isTransitioning, setTransitioning] = useState(false);
    useEffect(() => {
        setTransitioning(true);
    });
    const routeDashboard = () => {
        router.push('/vaults');
    };
    const routeMaker = () => {
        router.push('/');
    };
    return (<Container variant="container.wide" sx={container}>
      <Flex sx={logoContainer}>
        <Logo />
        <Flex sx={navContainer}>
          <Button onClick={routeMaker} variant={'text'} sx={{ ...navItem, ...navItemActive }}>Make</Button>
          <Button onClick={routeDashboard} variant={'text'} sx={navItem}>Vaults</Button>
        </Flex>
      </Flex>
      <Box sx={addressContainer}>
        <Address {...props}/>
      </Box>
    </Container>);
};
Header.defaultProps = {
    isConnected: false
};
//# sourceMappingURL=index.jsx.map