import { types } from '../actions';

const defaultToken = {
  balance: 0,
  price: 0,
  symbol: 'ETH',
  usdValue: 0
};

const initialState: any = {
  selectedToken: defaultToken,
  tokens: [defaultToken]
};

const tokenReducer = (state: any = initialState, action: any) => {
  const { SELECT_TOKEN, TOKENS } = types.tokens;
  const { payload, type } = action;

  switch (type) {
    case SELECT_TOKEN:
      const { selectedToken } = payload;
      return { ...state, selectedToken };

    case TOKENS:
      const { tokens } = payload;
      return { ...state, tokens };

    default:
      return state;
  }
};

export default tokenReducer;
