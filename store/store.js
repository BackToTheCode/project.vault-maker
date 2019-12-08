import { connectReducer, tokenReducer, vaultReducer, servicesReducer, routingReducer } from './reducers';
import { useReducer } from 'react';

const combineReducers = reducer => {
  return (state = {}, action) => {
    const keys = Object.keys(reducer);
    const nextReducers = {};

    for (let i = 0; i < keys.length; i++) {
      const invoke = reducer[keys[i]](state[keys[i]], action);
      nextReducers[keys[i]] = invoke;
    }
    return nextReducers;
  };
};

const rootReducer = combineReducers({
  connection: connectReducer,
  routing: routingReducer,
  services: servicesReducer,
  tokens: tokenReducer,
  vault: vaultReducer
});

// tslint:disable-next-line:no-shadowed-variable
function useStore(rootReducer, state) {
  const initialState = state || rootReducer(undefined, { type: undefined });
  return useReducer(rootReducer, initialState);
}

export { useStore, rootReducer };
