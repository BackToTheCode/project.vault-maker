import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { Box, Flex, Image } from 'rebass';
import styles from './styles';
// import vaultIcon from '../../../public/images/vault.svg';
import savingsIcon from '../../../public/images/savings.svg';

export const VaultMaker = () => {
  const { grid, gridItem, heroItem, makerItem, vault } = styles;
  const [isTransitioning, setTransitioning] = useState(false)
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setTransitioning(true);
  //     setTimeout(() => {
  //       router.push('/dashboard')
  //     }, 500)
    }, 2500)
  })

  return (
    <Box sx={grid}>
      <Flex sx={{...gridItem, ...heroItem, ...(heroItem.transitioning(isTransitioning))}}>
        <Image src={savingsIcon} sx={{...vault, ...(vault.transitioning(isTransitioning))}} />
      </Flex>
      <Box sx={{...gridItem,...makerItem}} />
    </Box>
  );  
};
