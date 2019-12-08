// import { fireEvent, render, wait } from '@testing-library/react';
// import React from 'react';
// import Page from '../pages';

// let getByText: any;
// let findByText: any;

// // setup app page
// beforeEach(async () => {
//   const component = render(<Page />);
//   getByText = component.getByText;
//   findByText = component.findByText;
  
//   // Setup metamask connection
//   const buttonText = 'Connect with Metamask';
//   fireEvent.click(getByText(buttonText));
// });

// test('Once connected - the user and show them them the Vault Maker Wizard', async (done) => {
//   // Arrange
//   const vaultMakerTitleSegment = 'We suggest';
//   const vaultMakerTitlePattern = new RegExp(vaultMakerTitleSegment, 'i');

//   // Act
//   const titleComponent = await findByText(vaultMakerTitlePattern);

//   // Assert
//   expect(titleComponent.textContent).toContain(vaultMakerTitleSegment);
//   done();
// });

// test('Once connected - should have updated the address bar text', async (done) => {
//   // Arrange
//   const publicKey = '0x61049F5e03Bfe3823f274C479158A94bcA26456c';
//   const publicKeyPrefixPattern = /0x/i;

//   // Act
//   const addressComponent = await findByText(publicKeyPrefixPattern);

//   // Assert
//   expect(addressComponent.textContent).toBe(publicKey);
//   done()
// });

// test("Once connected - should suggest a collateral type based on a user's highest value balance in USD", () => {
//   // Arrange
//   // const publicKey = '0x61049F5e03Bfe3823f274C479158A94bcA26456c';
//   // const publicKeyPrefixPattern = /0x/i;

//   // // Act
//   // const addressComponent = await findByText(publicKeyPrefixPattern);

//   // // Assert
//   // expect(addressComponent.textContent).toBe(publicKey);
//   // done()
// });

// test('Once connected - should update the address text', () => {
//   // Arrange
//   // Act
//   // Assert
// });
