/* eslint-disable */
export default {
    displayName: 'user-jobs',
    preset: '../../jest.preset.js',
    setupFilesAfterEnv: ['../../jest.setup.ts'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]s$': [
            'ts-jest',
            { tsconfig: '<rootDir>/tsconfig.spec.json' },
        ],
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: '../../coverage/packages/user-jobs',
};
