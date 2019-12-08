import { types } from '../actions';

export type RoutingAction =
  | { type: 'START_TRANSITION' }
  | { type: 'FINISH_TRANSITION' };

export interface State {
  isTransitioning: boolean;
}

const initialState: State = {
  isTransitioning: false
};

const routingReducer = (state: State = initialState, action: RoutingAction) => {
  const { TRANSITION_START, TRANSITION_FINISH } = types.routing;
  const { type } = action;

  switch (type) {
    case TRANSITION_START:
      return { ...state, isTransitioning: true };

    case TRANSITION_FINISH:
      return { ...state, isTransitioning: false };

    default:
      return state;
  }
};

export default routingReducer;
