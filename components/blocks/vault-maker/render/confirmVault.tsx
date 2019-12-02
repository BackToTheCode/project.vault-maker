import { ConfirmVault } from '../5-confirm-vault/wrapped';

export const confirmVault = () => {
  return (
    <ConfirmVault.Wrapped>
      <ConfirmVault.Title>{`Confirm your Vault`}</ConfirmVault.Title>
      <ConfirmVault.VaultDetail />
      <ConfirmVault.CTAButton>Confirm</ConfirmVault.CTAButton>
      <ConfirmVault.OAButton>Go back</ConfirmVault.OAButton>
    </ConfirmVault.Wrapped>
  );
};
