const path = require("path");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: [""] },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
