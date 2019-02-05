module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageReporters: ['json', 'html'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json'
        }
    }
};