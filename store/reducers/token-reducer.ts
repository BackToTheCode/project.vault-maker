import { types } from '../actions';

const defaultToken = {
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
      console.log('new-token-state', { ...state, selectedToken })
      return { ...state, selectedToken };

    case TOKENS:
      const { tokens } = payload;
      return { ...state, tokens };

    case INITIALISE_TOKENS:
      return payload;
      
    default:
      return state;
  }
};

export default tokenReducer;
