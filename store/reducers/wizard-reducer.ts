import { CONNECT_NUM, SELECT_NUM } from '../../constants/step-names';
import { types } from '../actions';

const initialState: any = {
  drawAmount: 0,
  lockAmount: 0,
  selectedToken: 'ETH',
  step: CONNECT_NUM
};

const wizardReducer = (state: any = initialState, action: any) => {
  const { STEP, LOCK_COLLATERAL, DRAW_DAI, INITIALISE_VAULT } = types.vault;
  const { payload, type } = action;

  switch (type) {
    case STEP:
      const { step } = payload;
      return { ...state, step };

    case LOCK_COLLATERAL:
      const { lockAmount } = payload;
      return { ...state, lockAmount };

    case DRAW_DAI:
      const { drawAmount } = payload;
      return { ...state, drawAmount };

    case INITIALISE_VAULT:
      return payload;

    default:
      return state;
  }
};

export default wizardReducer;
