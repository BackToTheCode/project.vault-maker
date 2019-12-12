import React, { useState } from 'react';import { Flex, Text } from 'rebass';
import { SELECT_NUM } from '../../../../../constants/step-names';
import { addBalancesToTokens, getAccount, getTokens, selectTokenWithLargestBalance } from '../../../../../utils/maker';
import { initMaker } from '../../../../../utils/maker/init-maker';
import { Button } from '../../../../elements/button/regular';
import { Loading } from '../../../../elements/loading';
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
  const [isLoading, setLoading] = useState(false);


  /**
   * Connect method that initialises web3 and maker objects
   *
   * An instantiated maker object
   * @typedef {Object} Maker
   * 
   * @return {Maker}
   */
  const connect = async () => {
    const network = process.env.NETWORK || 'kovan';
    const provider = process.env.PROVIDER || 'browser';
    const url = process.env.URL;
    const privateKey = process.env.PRIVATE_KEY;

    const [maker, web3] = await initMaker(network, provider, { url, privateKey });

    props.dispatchSetMaker({ maker });
    props.dispatchSetWeb3({ web3 });
    
    return [maker, web3];
  };

  /**
   * Click handler for when users attempt to connect with Metamask
   * Triggers loading component and updates global state
   *
   * An instantiated maker object   
   * @typedef {Object} evt      Synthetic React event
   * 
   */
  const handleClick = async (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    
    setLoading(true);

    setTimeout(() =>{
      setLoading(false);
    }, 5000);

    try {
      const [maker, web3] = await connect();
      
      const userAccount = await getAccount(web3);
      let tokens = getTokens(maker);
      tokens = await addBalancesToTokens(maker, tokens);
      const defaultToken = selectTokenWithLargestBalance(tokens);

      props.dispatchConnect({ address: userAccount });
      props.dispatchTokens({ tokens });
      props.dispatchSelectToken({ selectedToken: defaultToken });
      props.dispatchStep({ step: SELECT_NUM })
      setLoading(false);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    isLoading ? <Loading /> : 
    <Flex sx={{...container, ...sx }}>
      <Title sx={title}>Start Making a Vault</Title>
      <Text sx={{...title, ...subTitle}} variant="body.regular">Connect to the Ethereum network</Text>
      <Button onClick={handleClick} sx={button}>Connect with Metamask</Button>
    </Flex>
  );
};

