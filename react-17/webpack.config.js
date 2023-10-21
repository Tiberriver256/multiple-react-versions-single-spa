const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'micah-test',
    projectName: 'react-17',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: {
      react: 'react-17',
      ['react-dom']: 'react-dom-17',
    },
  });
};
