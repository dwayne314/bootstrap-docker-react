module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\', './dist'],
    verbose: false,
    setupFilesAfterEnv: ["./setupTests.js"],
};
