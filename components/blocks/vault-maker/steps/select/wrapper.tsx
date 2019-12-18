import connect from '../../../../../store/connect';
import { Select } from '../select';

function mapStateToProps(state: any) {
  const { isTransitioning } = state.routing;

  return {
    isTransitioning
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchStep: (payload: any) => dispatch({ type: 'STEP', payload }),
  };
}

const WrappedSelect = connect(mapStateToProps, mapDispatchToProps)(Select);

export { WrappedSelect };
