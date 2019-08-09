const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = withCSS(withImages({
    webpack: (config,{dev}) => {
        config.plugins.push(
          new SWPrecacheWebpackPlugin({
            verbose: true,
            staticFileGlobsIgnorePatterns: [/\.next\//],
            runtimeCaching: [
              {
                handler: 'networkFirst',
                urlPattern: /^https?.*/
              }
            ]
          })
        )
        //See more why we must add this: https://github.com/zeit/next.js/issues/1103
        config.module.rules = config.module.rules.map(rule => {
          if(rule.loader === 'babel-loader') {
            rule.options.cacheDirectory = false
          }
          return rule
        })
        return config
    },
    //Config for gh-pages
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Reactjs-SSR/' : ''
}));