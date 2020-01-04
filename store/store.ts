import { useReducer } from 'react';
import { connectReducer, routingReducer, servicesReducer, tokenReducer, wizardReducer } from './reducers';
import { ConnectState } from './reducers/connect-reducer';
import { RoutingState } from './reducers/routing-reducer';
import { ServicesState } from './reducers/services-reducer';
import { TokenState } from './reducers/token-reducer';
import { WizardState } from './reducers/wizard-reducer';


export interface State {
  connect: ConnectState;
  routing: RoutingState;
  services: ServicesState;
  tokens: TokenState;
  wizard: WizardState;
}

const combineReducers = reducer => {
  return (state = {}, action) => {
    const keys = Object.keys(reducer);
    const nextReducers = {};

    for (const key of keys) {
      const invoke = reducer[key](state[key], action);
      nextReducers[key] = invoke;
    }

    return nextReducers;
  };
};

const rootReducer = combineReducers({
  connection: connectReducer,
  routing: routingReducer,
  services: servicesReducer,
  tokens: tokenReducer,
  wizard: wizardReducer
});

// tslint:disable-next-line:no-shadowed-variable
function useStore(rootReducer: any, state?: State) {
  const initialState = state || rootReducer(undefined, { type: undefined });
  return useReducer(rootReducer, initialState);
}

export { useStore, rootReducer };
