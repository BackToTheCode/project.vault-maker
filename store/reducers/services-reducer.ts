// dispatchSetMaker: (payload: any) =>
// dispatch({ type: 'SET_MAKER' }, payload),
// dispatchSetWeb3: (payload: any) =>
// dispatch({ type: 'SET_WEB3' }, payload),

import { types } from '../actions';

export interface Payload {
    maker?: any;
    web3?: any;
}

export type ServicesAction =
  | {
      type: 'SET_MAKER';
      payload: Payload;
    }
  | {
      type: 'SET_WEB3';
      payload: Payload;
    };

export interface State {
  maker: any;
  web3: any;
}

const initialState: State = {
  maker: null,
  web3: null
};

const servicesReducer = (
  state: State = initialState,
  action: ServicesAction
) => {
  const { SET_MAKER, SET_WEB3 } = types.services;
  const { payload, type } = action;

  switch (type) {
    case SET_MAKER:
      const { maker } = payload;
      return { ...state, maker };

    case SET_WEB3:
      const { web3 } = payload;
      return { ...state, web3 };

    default:
      return state;
  }
};

export default servicesReducer;
