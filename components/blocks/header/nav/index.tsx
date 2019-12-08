/** @jsx jsx */
import { Button } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Flex } from 'rebass';
import styles from './styles';

export const Nav: FC<{}> = () => {
    const { container, item, itemActive} = styles;
    const router = useRouter();
    const routeToVaults = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        evt.preventDefault();
        router.push('/vaults');
    }

    const routeToMake = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        evt.preventDefault();
        router.push('/');
    }

  return (
    <Flex sx={container}>
        <Button onClick={routeToMake} variant={'text'} sx={{...item, ...itemActive}}>Make</Button>
        <Button onClick={routeToVaults} variant={'text'} sx={item}>Vaults</Button>
    </Flex>
  );
};

