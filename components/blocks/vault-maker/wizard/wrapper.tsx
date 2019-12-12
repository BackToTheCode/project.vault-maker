import connect from '../../../../store/connect';
import { Wizard } from '../wizard';

function mapStateToProps(state: any) {
  const { step } = state.wizard;

  return {
    step
  };
}

const WrappedWizard = connect(mapStateToProps, null)(Wizard);

export { WrappedWizard };
