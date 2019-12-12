import { types } from '../actions';

export interface Payload {
  icon?: string;
  iconWidth?: string;
  hasBackground?: boolean;
}

export type RoutingAction =
  | { type: 'CHANGE_ICON', payload: Payload }
  | { type: 'START_TRANSITION', payload: Payload }
  | { type: 'FINISH_TRANSITION', payload: Payload };

export interface State {
  icon: string,
  iconWidth: string,
  isTransitioning: boolean;
}

const initialState: State = {
  icon: 'saving',
  iconWidth: '300px',
  isTransitioning: false,
  hasBackground: false
};

const routingReducer = (state: State = initialState, action: RoutingAction) => {
  const { CHANGE_ICON, TRANSITION_START, TRANSITION_FINISH } = types.routing;
  const { type } = action;

  switch (type) {
    case TRANSITION_START:
      return { ...state, isTransitioning: true };

    case TRANSITION_FINISH:
      return { ...state, isTransitioning: false };

    case CHANGE_ICON:
      const { icon, iconWidth, hasBackground } = action.payload;
      return { ...state, icon, iconWidth, hasBackground };
      
    default:
      return state;
  }
};

export default routingReducer;
