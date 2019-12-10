import connect from '../../../../store/connect';
import { Wizard } from '../wizard';

function mapStateToProps(state: any) {
  const { step } = state.wizard;

  return {
    step
  };
}

function mapDispatchToProps(dispatch: any) {
    return {
    //   dispatchTransitionFinish: () =>
    //       dispatch({ type: 'TRANSITION_FINISH'}),
    //   dispatchTransitionStart: () =>
    //     dispatch({ type: 'TRANSITION_START' })
    };
  }
  

const WrappedWizard = connect(mapStateToProps, mapDispatchToProps)(Wizard);

export { WrappedWizard };
