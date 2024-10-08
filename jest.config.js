module.exports = {
  testEnvironment: "<rootDir>/tools/customJSDOM.js",
  setupFiles: ["<rootDir>/tools/testSetup.js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tools/fileMock.js",
    "\\.(css|less)$": "<rootDir>/tools/styleMock.js",
  },
};
