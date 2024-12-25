export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^.+\\.module\\.(css|scss)$': 'identity-obj-proxy',
		'^.+\\.(css|scss)$': require.resolve('./styleMock.js'),
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testPathIgnorePatterns: ['/node_modules/', '/dist/'],
	transform: {
		'^.+\\.tsx?$': ['ts-jest', {tsconfig: 'tsconfig.app.json'}],
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	verbose: true
};