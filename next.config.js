
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['2sYUv2Xxxjndoh7xSJ5vkv'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  