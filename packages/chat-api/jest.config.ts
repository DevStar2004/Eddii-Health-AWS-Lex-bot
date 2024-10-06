/* eslint-disable */
export default {
    displayName: 'chat-api',
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
    coverageDirectory: '../../coverage/packages/chat-api',
};