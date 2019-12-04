import connect from '../../../store/connect';
import { Dashboard } from '../dashboard';

function mapStateToProps(state: any) {
  return {
    cdp: state.services.cdp,
    state
  };
}

const Wrapped = connect(mapStateToProps, null)(Dashboard);

Dashboard.Wrapped = Wrapped;

export { Dashboard };
