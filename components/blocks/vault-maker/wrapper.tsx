import connect from '../../../store/connect';
import { VaultMaker } from '../vault-maker';

function mapStateToProps(state: any) {
  const { isTransitioning, icon, iconWidth, hasBackground } = state.routing;

  return {
    hasBackground,
    icon,
    iconWidth,
    isTransitioning,
  };
}

const WrappedVaultMaker = connect(mapStateToProps, null)(VaultMaker);

export { WrappedVaultMaker };
