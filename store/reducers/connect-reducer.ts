import { types } from '../actions';

export type ConnectAction =
  | { type: 'CONNECT'; payload: { address: string } }
  | { type: 'DISCONNECT'; payload: null };

export interface ConnectState {
  isConnected: boolean;
  address?: string;
};

const initialState: ConnectState = {
  isConnected: false
};

const connectReducer = (
  state: ConnectState = initialState,
  action: ConnectAction
) => {
  const { CONNECT, DISCONNECT, INITIALISE_CONNECT } = types.connect;
  const { payload, type } = action;

  switch (type) {
    case CONNECT:
      const { address } = payload;
      return { ...state, address, isConnected: true };

    case DISCONNECT:
      return { ...state, isConnected: false };

    case INITIALISE_CONNECT:
        return payload;

    default:
      return state;
  }
};

export default connectReducer;
