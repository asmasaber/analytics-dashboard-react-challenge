import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  "testEnvironment": "jsdom",
  "setupFiles": [
    "jest-canvas-mock",
    "<rootDir>/setup-matchers.ts"
  ]
};

export default config;