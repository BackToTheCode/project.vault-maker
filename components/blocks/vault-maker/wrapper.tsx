import connect from '../../../store/connect';
import { VaultMaker } from '../vault-maker';

function mapStateToProps(state: any) {
  const { isTransitioning } = state.routing;

  return {
    isTransitioning
  };
}

const WrappedVaultMaker = connect(mapStateToProps, null)(VaultMaker);

export { WrappedVaultMaker };
