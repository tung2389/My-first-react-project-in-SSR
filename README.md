- In order to make your app work properly in heroku, you must add this line to package.json:
```
heroku-postbuild": "next build
```

- Demo: https://reactjs-ssr.herokuapp.com/

- Note: this code can only uses serviceWorker when npm run build. npm start won't make it work.
