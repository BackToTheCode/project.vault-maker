import MakerJS from '@makerdao/dai';
import McdPlugin, { ETH, BAT, MDAI } from '@makerdao/dai-plugin-mcd';
import dsTokenAbi from './dsToken.abi.json';

/**
 * Handles the initialisation of a Maker object for using Maker services
 * And handles the creation of a web3 object to access raw web3 transactions and capabilities
 *
 * An instantiated maker object
 * @typedef {Object} Maker
 * 
 * An instantiated web3 object
 * @typedef {Object} Web3
 * 
 * @param  {String} network         The name of the Ethereum network to connect to
 * @param {String} provider         The type of provider to use when connecting (e.g browser / http
 * @param {Object} infuraOptions    A dictionary of options to tell Maker which infura project to use when sending transactions
 * @param {Object} Maker            Maker library
 * @return {[Maker, Web3]}
 */
const initMaker = async (network, provider, infuraOptions, Maker = MakerJS) => {

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

export { initMaker, BAT, ETH, MDAI };
