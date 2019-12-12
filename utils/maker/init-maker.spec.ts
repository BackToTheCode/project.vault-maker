import Maker from '@makerdao/dai';
import { initMaker } from '../maker/init-maker';

const mockProxy = {
  ensureProxy: jest.fn()
}

const mockMaker = {
    authenticate: jest.fn(),
    service: jest.fn().mockImplementation(() => mockProxy)
};

Maker.create = jest.fn().mockImplementation(() => mockMaker);

describe('initMaker() spec', () => {
  test('it call various methods on the Maker lib object', async (done) => {
    // Arrange
    const expectedServiceCalls = 2;
    const network = "test";
    const provider = "testProvider";
    const infuraOptions = {
      privateKey: 'a private key',
      url: 'a url', 
    };

    // Act
    await initMaker(network, provider, infuraOptions, Maker);

    // Assert

    expect(Maker.create).toBeCalled();
    expect(mockMaker.service).toBeCalledTimes(expectedServiceCalls)

    done();

  });

});
