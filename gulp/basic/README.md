# basic gulp starter project
Starting point for client side apps using Gulp

Includes the following tools, tasks, and workflows:

- [SASS](http://sass-lang.com/), [autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)) and [cssComb](http://csscomb.com/)
- [BrowserSync](http://browsersync.io) for live reloading and a static server
- [Eslint](http://eslint.org/)
- [Image optimization](https://www.npmjs.com/package/gulp-imagemin)

### Install npm dependencies
```
$ npm install
```

After that, just run the `default` run task with:

```
$ npm start
```

#### Build Task

There is also a `build` task you can run:

```
$ npm run build
```

## TODO

* find out company config settings for eslint
* add css comb config file
* setup csscomb to run on dev files
* better notifications on gulp warnings/errors
* add sourcemapping and asset revisioning
