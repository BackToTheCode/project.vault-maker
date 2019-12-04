import { types } from '../actions';

export interface Payload {
  maker?: any;
  web3?: any;
  cdp?: any;
  appState?: any;
}

export type ServicesAction =
  | {
      type: 'SET_MAKER';
      payload: Payload;
    }
  | {
      type: 'SET_WEB3';
      payload: Payload;
    }
  | {
      type: 'SET_CDP';
      payload: Payload;
    }
  | {
      type: 'SET_STATE';
      payload: Payload;
    };

export interface State {
  maker: any;
  web3: any;
  cdp: any;
}

const initialState: State = {
  cdp: null,
  maker: null,
  web3: null,

};

const servicesReducer = (
  state: State = initialState,
  action: ServicesAction
) => {
  const { SET_MAKER, SET_WEB3, SET_CDP, INITIALISE_SERVICES } = types.services;
  const { payload, type } = action;

  switch (type) {
    case SET_MAKER:
      const { maker } = payload;
      return { ...state, maker };

    case SET_WEB3:
      const { web3 } = payload;
      return { ...state, web3 };

    case SET_CDP:
      const { cdp } = payload;
      return { ...state, cdp };

    case INITIALISE_SERVICES:
      return payload;

    default:
      return state;
  }
};

export default servicesReducer;
