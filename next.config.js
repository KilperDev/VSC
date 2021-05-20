
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['6wDfSwLS8fuWczA82Yqovr'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  