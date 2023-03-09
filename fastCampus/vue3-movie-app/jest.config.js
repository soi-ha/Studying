module.exports = {
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist'
  ],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  }
}