import type { Config } from "jest";

const jestConfig: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [
    "**/test/**.test.ts",
  ],
  "resolver": "jest-ts-webcompat-resolver",
};

export default jestConfig;