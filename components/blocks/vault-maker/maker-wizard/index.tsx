import { Title } from '../../../elements/title';
  import { Input, Label } from '@rebass/forms';
import React from 'react';
import { Box, Flex, Image, Text } from 'rebass';
import { Button } from '../../../elements/button/regular';
import styles from './styles';

/**
 * VaultMakerProps {@link Wizard}
 * @see Wizard
 */

export interface WizardProps {
  /**
   * Whether a route transition is in progress
   */
  sx?: any;
}

/**
 * Vault Maker Wizard
 *
 * @component
 * @example
 * return (
 *   <Wizard  />
 * )
 *
 * @see WizardProps
 * @extends {FC<Props>}
 */
export const Wizard = props => {
  const { button, container, subTitle, title } = styles;
  const {  sx } = props;

  const handleSubmit = evt => evt.preventDefault();

  return (
    <Flex sx={{...container, ...sx }}>
      <Title sx={title}>Start Making a Vault</Title>
      <Text sx={{...title, ...subTitle}}variant="body.regular">Connect to the Ethereum network</Text>
      <Button sx={button}>Connect with Metamask</Button>
    </Flex>
 
  );
};

{/* <Box as="form" onSubmit={handleSubmit} sx={{...container, ...sx }}>
<Text variant="body.regular" sx={label}>LOCK COLLATERAL</Text>
<Input sx={input} />
</Box> */}

{/* <Wallet.Header>Start Making a Vault</Wallet.Header>
<Wallet.SubHeader>Connect to the Ethereum network</Wallet.SubHeader> */}