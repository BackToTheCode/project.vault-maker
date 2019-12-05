import connect from '../../../store/connect';
import { Dashboard } from '../dashboard';

function mapStateToProps(state: any) {
  console.log('STATE-MAP', state)
  return {
    cdp: state.services ? state.services.cdp : {"a": 5}
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchSetState: (payload: any) => {
      const { connection, tokens, vault, services} = payload;
      console.log('PAYLOAD', payload)
      dispatch({ type: 'INITIALISE_CONNECT', connection });
      dispatch({ type: 'INITIALISE_TOKENS', tokens });
      dispatch({ type: 'INITIALISE_VAULT', vault });
      dispatch({ type: 'INITIALISE_SERVICES', services });
    }
  };
}

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

Dashboard.Wrapped = Wrapped;

export { Dashboard };
