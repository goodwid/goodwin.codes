const path = require('path');

module.exports = {
  verbose: true,
  clearMocks: true,
  projects: [
    '<rootDir>/jest.config.js',
  ],
  transform: {
    '^.+\\.(js|jsx)$': path.resolve(__dirname, './jest-transformer'),
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['jest-prop-type-error', '<rootDir>/src/setup-tests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^services(.*)$': '<rootDir>/src/services$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
    '^routes(.*)$': '<rootDir>/src/routes$1',
    '^shared(.*)$': '<rootDir>/../shared/src$1',
    '^assets(.*)$': '<rootDir>/../shared/assets$1',
    '^root(.*)$': '<rootDir>/../../$1',
  },
  testPathIgnorePatterns: [
    'node_modules',
    'cordova/plugins/',
  ],
};
