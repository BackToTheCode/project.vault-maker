import Maker from '@makerdao/dai';
import McdPlugin, { ETH, BAT, MDAI } from '@makerdao/dai-plugin-mcd';
import dsTokenAbi from './dsToken.abi.json';

const connectMaker = async (network, provider, infuraOptions) => {

  const options = {
    plugins: [
      [
        McdPlugin,
        {
          cdpTypes: [
            { currency: ETH, ilk: 'ETH-A' },
            { currency: BAT, ilk: 'BAT-A' }
            // { currency: REP, ilk: 'REP-A' },
          ],
          network: network,
        }
      ]
    ],
    ...infuraOptions
  };

  const maker = await Maker.create(provider, options);

  await maker.authenticate();
  await maker.service('proxy').ensureProxy();

  const web3 = await maker.service('web3')._web3;

  return [maker, web3];
};

export { connectMaker, BAT, ETH, MDAI };
