import { types } from '../actions';

export interface Token {
  balance: number;
  ilk: string;
  penalty: number;
  price: number;
  ratio: number;
  symbol: string;
  usdValue: number;
}

const defaultToken: Token = {
  balance: 0,
  ilk: 'ETH-A',
  penalty: 0,
  price: 0,
  ratio: 0,
  symbol: 'ETH',
  usdValue: 0
};

const initialState: any = {
  selectedToken: defaultToken,
  tokens: [defaultToken]
};

const tokenReducer = (state: any = initialState, action: any) => {
  const { SELECT_TOKEN, TOKENS, INITIALISE_TOKENS } = types.tokens;
  const { payload, type } = action;

  switch (type) {
    case SELECT_TOKEN:
      const { selectedToken } = payload;
      return { ...state, selectedToken };

    case TOKENS:
      const { tokens } = payload;
      console.log('tokens-reducer', tokens);
      console.log('tokens-state', { ...state, tokens })
      return { ...state, tokens };

    case INITIALISE_TOKENS:
      return payload;
      
    default:
      return state;
  }
};

export default tokenReducer;
