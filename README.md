# Webpack Starter Kit

> An opinionated starter kit using Webpack 4, SCSS, PostCSS, Browsersync, ESLint (airbnb) & Babel.

Out of the box, this Webpack starter kit comes with several tools and opinionated choices for front-end development projects.

## Installation & Use

```bash
  # Git Clone this repo, where 'my-project' is the name of your project
  git clone git@github.com:robertguss/Webpack-Starter-Kit.git my-project

  # cd into the repo's diectory
  cd my-project

  # install NPM modules
  yarn

  # start development server
  yarn start

  #build for production
  yarn build
```

## SCSS
Scss is the css pre-processor of choice for this kit.

Inside of `scss/libary/_breakpoint.scss` are several mixing for handling responsive media queries with a mobile first approach. The variables for these breakpoints are set inside of `scss/_variables.scss`.

## PostCSS

PostCSS is included with 3 plugins by default:

* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [CSS Nano](http://cssnano.co/)
* [Rucksack](https://www.rucksackcss.org/) - Note: Rucksack is necessary if you plan to take advantage of the `scss/libary/_typography.scss`. This provides reponsive typography out of the box for you. Simply go to [Modular Scale](http://www.modularscale.com/) to create the typographic scale of your choosing and add the values to the variables in the file. Granted, this is a very opinionated way of handling responsive typography, so please customize to your liking. If you have a better method, please submit a pull request 😎

To add additional plugins, simply `yarn add <post css plugin name here> -D` then add the plugin to `postcss.config.js`. In this config you will note there are 2 `module.exports` one is for production:

```bash
  yarn build
```

and the other is for development:

```bash
yarn start
```

add your postcss plugin to the correct one accordingly.

## Browsersync

We are using [Browsersync](https://browsersync.io/) for live reload and responsive design/development. The config for browsersync can be found in `webpack.dev.js` around `line 63`.

## ES Lint

This kit is using [Airbnb's ES Lint Configs & Style Guide](https://github.com/airbnb/javascript).

## Babel

Write [future JavaScript](http://babeljs.io/) today!