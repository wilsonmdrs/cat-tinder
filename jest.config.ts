import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect"
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    // '\\.(svg)$': 'react-native-svg-transformer',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp)$': '<rootDir>/__mocks__/fileMock.js',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    "\\.(svg)$": "<rootDir>/__mocks__/svgMock.js"
    // Add any other module name mappings or aliases here
  },
};

export default config;
