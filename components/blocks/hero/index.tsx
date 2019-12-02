/** @jsx jsx */
import { FullContainer, Loading } from '@backtothecode/vault-maker-ui';
import { jsx } from '@emotion/core';
import uniqBy from 'lodash.uniqby';
// import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import ledgerLogo from '../../../public/images/ledger-logo.png';
import metamaskLogo from '../../../public/images/metamask-fox.svg';
import trezorLogo from '../../../public/images/trezor-logo.png';
import { getWeb3 as mkrGetWeb3, setup as mkrSetup } from '../../../utils/web3';
import { VaultMaker } from '../vault-maker/wrapped';
import { Wallet } from '../wallet';

export interface HeroProps {
  variant?: string;
  isComplete: boolean;
  isConnected: boolean;
  children?: React.ReactNode;
  dispatchConnect: ({ address }: { address: string }) => void;
  dispatchTokens: ({ tokens }: { tokens: any[] }) => void;
  dispatchSelectToken: ({ selectedToken }: { selectedToken: any }) => any;
}

interface Hero {
  Wrapped?: any;
}

export const Hero: FC<HeroProps> & Hero = props => {
  const [isLoading, setLoading] = useState(false);
  const { isConnected, isComplete } = props;
  const router = useRouter();

  let maker: any = null;
  let web3: any = null;

  const addBalances = async (tokens: any[]) => {
    if (!maker) {
      return;
    }
    const tokenService = maker.service('token');

    const clonedTokens: any[] = tokens.map((token: any) => token);
    for (const [idx, token] of tokens.entries()[Symbol.iterator]()) {
      const tokenFromService = tokenService.getToken(token.symbol);
      const tokenBalance = await tokenFromService.balance();
      clonedTokens[idx].balance = tokenBalance.toNumber();
      clonedTokens[idx].usdValue = tokenBalance.toNumber() * token.price;
    }

    return clonedTokens;
  };

  const getTokens = async () => {
    if (!maker) {
      return;
    }
    const { cdpTypes } = maker.service('mcd:cdpType');
    const uniqCdpTypes = uniqBy(cdpTypes, (cdpt: any) => cdpt.currency.symbol);

    const dict: any = {};
    const tokens = uniqCdpTypes.map((cdpType: any) => {
      const token = {
        penalty: cdpType.liquidationPenalty,
        price: cdpType.price.toBigNumber().toNumber(),
        ratio: cdpType.liquidationRatio.toBigNumber().toNumber(),
        symbol: cdpType.currency.symbol
      };
      return { ...token, ...dict[token.symbol] };
    });

    return tokens;
  };

  const getAccount = async () => {
    if (!web3) {
      return;
    }
    const accounts = await web3.eth.getAccounts();
    const userAccount = accounts[0];

    return userAccount;
  };

  const selectDefaultToken = (tokens: any[]) => {
    const usdValues = tokens.map(token => parseInt(token.usdValue, 10));
    const maxIndex = usdValues.indexOf(Math.max(...usdValues));
    return tokens[maxIndex];
  };

  const setupMaker = async () => {
    const network = process.env.NETWORK || 'kovan';
    const provider = process.env.PROVIDER || 'browser';
    const url = process.env.URL;
    const privateKey = process.env.PRIVATE_KEY;

    maker = await mkrSetup(network, provider, { url, privateKey });
    web3 = (await mkrGetWeb3()) as any;
  };

  const handleMetamask = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await setupMaker();

    setTimeout(() => {
      setLoading(false);
    }, 3500);

    const userAccount = await getAccount();
    const tokens = await getTokens();
    const tokensWithBalances = await addBalances(tokens);
    const selectedToken = selectDefaultToken(tokensWithBalances);

    props.dispatchConnect({ address: userAccount });
    props.dispatchTokens({ tokens: tokensWithBalances });
    props.dispatchSelectToken({ selectedToken });

    setLoading(false);
  };

  const isCreated = false;

  return (
    <FullContainer variant="container.default">
      {renderWallet(isConnected, isLoading, handleMetamask)}
      {!isComplete && renderVaultMaker(isConnected)}
      {isComplete && renderDashboard(isCreated, router)}
    </FullContainer>
  );
};

const renderDashboard = (isCreated: boolean, router: any) => {
  setTimeout(() => {
    router.push('/dashboard');
    isCreated = true;
  }, 10000);

  return !isCreated ? (
    <Loading text={'Creating your new Vault...'} />
  ) : (
    <div>CDP Created</div>
  );
};

const renderWallet = (
  isConnected: boolean,
  isLoading: boolean,
  handleMetamask: (e: any) => Promise<void>
) =>
  !isConnected &&
  (isLoading ? (
    <Loading />
  ) : (
    <Wallet>
      <Wallet.Header>Start Making a Vault</Wallet.Header>
      <Wallet.SubHeader>Connect to the Ethereum network</Wallet.SubHeader>
      <Wallet.LogoButton
        variant="outline"
        icon={metamaskLogo}
        onClick={handleMetamask}
      >
        Connect with Metamask
      </Wallet.LogoButton>
      <Wallet.LogoButton variant="outline" icon={trezorLogo} isDisabled={true}>
        Trezor - coming soon...
      </Wallet.LogoButton>
      <Wallet.LogoButton variant="outline" icon={ledgerLogo} isDisabled={true}>
        Ledger - coming soon...
      </Wallet.LogoButton>
    </Wallet>
  ));

const renderVaultMaker = (isConnected: boolean) => {
  // const VaultMaker: any = dynamic(() => import('../vault-maker/wrapped').then(mod => mod.VaultMaker),
  //   {
  //     loading: () => <Loading />
  //   }
  // );
  // // console.log('DynamicVaultMaker', DynamicVaultMaker);
  // // return isConnected && <DynamicVault />
  return isConnected && <VaultMaker.Wrapped />
};
