import { CONNECT_NUM, SELECT_NUM } from '../../constants/step-names';
import { types } from '../actions';

export interface WizardState {
  drawAmount: number;
  lockAmount: number;
  selectedTokenSymbol: string;
  step: number;
}

const initialState: WizardState = {
  drawAmount: 0,
  lockAmount: 0,
  selectedTokenSymbol: 'ETH',
  step: CONNECT_NUM
};

const wizardReducer = (state: WizardState = initialState, action: any) => {
  const { STEP, LOCK_COLLATERAL, DRAW_DAI, INITIALISE_VAULT } = types.vault;
  const { payload, type } = action;

  switch (type) {
    case STEP:
      const { step } = payload;
      console.log('new-wizard-state', { ...state, step })
      return { ...state, step };

    case LOCK_COLLATERAL:
      const { lockAmount } = payload;
      console.log('amount-locked-state', { ...state, lockAmount })
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
