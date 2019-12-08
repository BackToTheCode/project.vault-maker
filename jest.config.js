module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  runner: 'jest-serial-runner',
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `${__dirname}/__mocks__/fileMock.js`,
    "\\.(css|less)$": `${__dirname}/__mocks__/styleMock.js`,
    "^@backtothecode/vm-ui-library": "<rootDir>/node_modules/@backtothecode/vm-ui-library/dist/cjs/index.js"
  },
  setupFiles: ["./jest.setup.js"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testPathIgnorePatterns: ["./.next/", "/.storybook/", "./node_modules/"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  }
};
