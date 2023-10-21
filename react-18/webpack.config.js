const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'micah-test',
    projectName: 'react-18',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: {
      react: 'react-18',
      ['react-dom']: 'react-dom-18',
    },
  });
};
