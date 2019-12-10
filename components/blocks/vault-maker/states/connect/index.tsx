import uniqBy from 'lodash.uniqby';
import React, { useState } from 'react';
import { Flex, Text } from 'rebass';
import { connectMaker } from '../../../../../utils/web3';
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

  const connect = async () => {
    const network = process.env.NETWORK || 'kovan';
    const provider = process.env.PROVIDER || 'browser';
    const url = process.env.URL;
    const privateKey = process.env.PRIVATE_KEY;

    const [maker, web3] = await connectMaker(network, provider, { url, privateKey });

    props.dispatchSetMaker({ maker });
    props.dispatchSetWeb3({ web3 });
    
    return maker;
  };

  const addBalances = async (maker: any, tokens: any[]) => {
    const tokensService = maker.service('token');
    const clonedTokens: any[] = tokens.map((token: any) => token);

    for (const [idx, token] of tokens.entries()[Symbol.iterator]()) {
      const tokenService = tokensService.getToken(token.symbol);
      const tokenBalance = await tokenService.balance();
      clonedTokens[idx].balance = tokenBalance.toNumber();
      clonedTokens[idx].usdValue = tokenBalance.toNumber() * token.price;
    }

    return clonedTokens;
  };

  const getAccount = async (web3: any) => {
    const accounts = await web3.eth.getAccounts();
    const userAccount = accounts[0];

    return userAccount;
  };

  const getTokens = async (maker: any) => {
    const { cdpTypes } = maker.service('mcd:cdpType');
    const uniqCdpTypes = uniqBy(cdpTypes, (cdpt: any) => cdpt.currency.symbol);

    const dict: object = {};
    const tokens = uniqCdpTypes.map((cdpType: any) => {
      const token = {
        ilk: cdpType.ilk,
        penalty: cdpType.liquidationPenalty,
        price: cdpType.price.toBigNumber().toNumber(),
        ratio: cdpType.liquidationRatio.toBigNumber().toNumber(),
        symbol: cdpType.currency.symbol
      };
      return { ...token, ...dict[token.symbol] };
    });

    return tokens;
  };

  const autoSelectToken = (tokens: any[]) => {
    const usdValues = tokens.map(token => parseInt(token.usdValue, 10));
    const maxIndex = usdValues.indexOf(Math.max(...usdValues));

    return tokens[maxIndex];
  };

  const handleClick = async (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();

    setLoading(true);

    setTimeout(() =>{
      setLoading(false);
    }, 5000);

    try {
      const [maker, web3] = await connect();

      const userAccount = await getAccount(web3);
      let tokens = await getTokens(maker);
      tokens = await addBalances(maker, tokens);
      const defaultToken = autoSelectToken(tokens);

      props.dispatchConnect({ address: userAccount });
      props.dispatchTokens({ tokens });
      props.dispatchSelectToken({ selectedToken: defaultToken });

      setLoading(false);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    isLoading ? <Loading /> : 
    <Flex sx={{...container, ...sx }}>
      <Title sx={title}>Start Making a Vault</Title>
      <Text sx={{...title, ...subTitle}}variant="body.regular">Connect to the Ethereum network</Text>
      <Button onClick={handleClick} sx={button}>Connect with Metamask</Button>
    </Flex>
  );
};

