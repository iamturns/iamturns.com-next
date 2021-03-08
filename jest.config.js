module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  roots: ["<rootDir>/src/"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/dist/", "/node_modules/"],
};
