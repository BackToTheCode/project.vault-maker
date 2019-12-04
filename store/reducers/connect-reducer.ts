import { types } from '../actions';

export type ConnectionAction =
  | { type: 'CONNECT'; payload: { address: string } }
  | { type: 'DISCONNECT'; payload: null };

export interface State {
  isConnected: boolean;
  address?: string;
};

const initialState: State = {
  isConnected: false
};

const connectReducer = (
  state: State = initialState,
  action: ConnectionAction
) => {
  const { CONNECT, DISCONNECT, INITIALISE_CONNECT } = types.connection;
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
