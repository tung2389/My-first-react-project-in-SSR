- In order to make your app work properly in heroku, you must add this line to package.json:
```
heroku-postbuild": "next build
```

- Note: this code can only uses serviceWorker when npm run build. npm start won't make it work.

- Deploying to github page is quite difficult:
  
  First, change the next.config.js:
    ```
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
    ```
  Second, add the file env-config.js:
    ```
    const prod = process.env.NODE_ENV === 'production'
    module.exports = {
      'process.env.BACKEND_URL': prod ? '/Reactjs-SSR' : ''
    }
    ```
  Next, you must "run npm install --save-dev babel-plugin-transform-define" 
  Finally, add the .babelrc.js:
    ```
    const env = require('./env-config')

    module.exports = {
      'presets': [
        'next/babel'
      ],
      'plugins': [
        ['transform-define', env]
      ]
    }
    ```
  You can also add this script to your package.json file in order to deploy faster:
    ```
    "deploy": "rm -rf node_modules/.cache && next build && next export && touch out/.nojekyll && git add out/ && git commit -     m \"Deploy Next.js to gh-pages\" && git subtree push --prefix out origin gh-pages"
    ```
Source: https://github.com/thierryc/Next-gh-page-example
