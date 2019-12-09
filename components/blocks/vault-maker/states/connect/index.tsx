import React from 'react';
import { Flex, Text } from 'rebass';
import { Button } from '../../../../elements/button/regular';
import { Title } from '../../../../elements/title';
import styles from './styles';

/**
 * ConnectProps {@link Connect}
 * @see Connect
 */

export interface ConnectProps {
  /**
   * A system-ui style object
   */
  sx?: any;
}

/**
 * Connect step of Wizard
 *
 * @components
 * @example
 * return (
 *   <Connect  />
 * )
 *
 * @see ConnectProps
 * @extends {FC<Props>}
 */
export const Connect = props => {
  const { button, container, subTitle, title } = styles;
  const { sx } = props;

  return (
    <Flex sx={{...container, ...sx }}>
      <Title sx={title}>Start Making a Vault</Title>
      <Text sx={{...title, ...subTitle}}variant="body.regular">Connect to the Ethereum network</Text>
      <Button sx={button}>Connect with Metamask</Button>
    </Flex>
 
  );
};

