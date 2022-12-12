/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: [
    "**/.*",
    "**/*.test.*",
  ],
  assetsBuildDirectory: "_compiled/public/build",
  serverBuildPath: "_compiled/build/index.js",
};
