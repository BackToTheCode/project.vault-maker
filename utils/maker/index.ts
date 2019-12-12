import uniqBy from 'lodash.uniqby';

export interface Token {
  ilk: string;
  penalty: number;
  price: number;
  ratio: number;
  symbol: string;
}

const getTokens = (maker: any) => {
  const { cdpTypes } = maker.service('mcd:cdpType');
  const uniqCdpTypes = uniqBy(cdpTypes, (cdpt: any) => cdpt.currency.symbol);

  const tokens = uniqCdpTypes.map((cdpType: any) => {
    const token: Token = {
      ilk: cdpType.ilk,
      penalty: cdpType.liquidationPenalty,
      price: cdpType.price.toBigNumber().toNumber(),
      ratio: cdpType.liquidationRatio.toBigNumber().toNumber(),
      symbol: cdpType.currency.symbol
    };
    return token;
  });

  return tokens;
};

const getAccount = async (web3: any) => {
  const accounts = await web3.eth.getAccounts();
  const userAccount = accounts[0];

  return userAccount;
};

const addBalancesToTokens = async (maker: any, tokens: any[]) => {
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

const selectTokenWithLargestBalance = (tokens: any[]) => {
  const usdValues = tokens.map(token => parseInt(token.usdValue, 10));
  const maxIndex = usdValues.indexOf(Math.max(...usdValues));

  return tokens[maxIndex];
};

export { getAccount, getTokens, addBalancesToTokens, selectTokenWithLargestBalance };
