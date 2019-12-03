import {
  CONFIRM_COLLATERAL_NUM,
  LOCK_COLLATERAL_NUM,
  DRAW_DAI_NUM
} from '../../constants/step-names';
import { types } from '../actions';

const initialState: any = {
  drawAmount: 0,
  lockAmount: 0,
  selectedToken: 'ETH',
  step: CONFIRM_COLLATERAL_NUM
};

const vaultReducer = (state: any = initialState, action: any) => {
  const { STEP, LOCK_COLLATERAL, DRAW_DAI } = types.vault;
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
    default:
      return state;
  }
};

export default vaultReducer;
