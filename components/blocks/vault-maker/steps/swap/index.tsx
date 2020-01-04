import { Container } from '@backtothecode/vm-ui-library';
import React, { FC } from 'react';
import { Box, Flex, Text } from 'rebass';
import { SELECT_NUM } from '../../../../../constants/step-names';
import batIcon from '../../../../../public/images/bat-logo.png';
import ethIcon from '../../../../../public/images/ethereum-logo.svg'
import { Token } from '../../../../../store/reducers/token-reducer';
import { Button } from '../../../../elements/button/regular';
import { Title } from '../../../../elements/title';
import { Option  } from './option';
import styles from './styles';

/**
 * SwapProps {@link Swap}
 * @see Swap
 */

export interface SwapProps {
  /**
   * Dispatch the token selected by the user
   */
  dispatchSelectToken?: ({ selectedToken }: { selectedToken: any })  => void;
  /**
   * Dispatch the next step the wizard should progress to
   */
  dispatchStep?: ({ step }: { step: number }) => void;
  /**
   * The currently selected Token
   */
  selectedToken: Token;
  /**
   * A system-ui style object
   */
  sx?: any;
  theme: any;
  tokens: Token[];
}

/**
 * Swap step of Wizard
 *
 * @components
 * @example
 * return (
 *   <Swap  />
 * )
 *
 * @see SwapProps
 * @extends {FC<Props>}
 */
export const Swap: FC<SwapProps> = props => {
  const { button, buttonContainer, container, subTitle, title } = styles;
  const { selectedToken, sx, theme, tokens } = props;

  /**
   * Click handler for progressing to the swap step of 
   * the vault-maker wizard
   * 
   * @typedef {Object} evt      Synthetic React event
   * 
   */
  const handleClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>)  => {
    evt.preventDefault();
    props.dispatchStep({step: SELECT_NUM});
  }
  
  /**
   * Handle form submission by blocking any default action
   *
   * An instantiated maker object   
   * @typedef {Object} evt      Synthetic React event
   * 
   */
  const handleSubmit = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.preventDefault();
  }

  const icons = {
    bat: batIcon,
    eth: ethIcon,
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Flex sx={{...container, ...sx }}>
        <Title sx={title}>Swap token</Title>
        <Text sx={{...title, ...subTitle}} variant="body.regular">Choose a different token to use as Vault collateral</Text>
        <Option 
          icon={icons.eth}
          name="ETH"
          symbol={selectedToken.symbol}
          dispatchSelectToken={props.dispatchSelectToken}
          tokens={tokens}
          brand={theme.colors.eth}>
            ETH
        </Option>
        <Option 
          icon={icons.bat}
          name="BAT"
          symbol={selectedToken.symbol}
          dispatchSelectToken={props.dispatchSelectToken}
          tokens={tokens}
          brand={theme.colors.bat}>
            BAT
        </Option>
        <Container sx={buttonContainer}>
          <Button onClick={handleClick} sx={button}>Select</Button>
        </Container>   
      </Flex>
    </Box>
  );
};
