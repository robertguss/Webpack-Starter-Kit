# DNL 2017 Webdev Starter Kit

This particular starter kit is built using webpack and is used for sole JS projects not Vue.

## Setting up a new project repository

- Clone this repository into your desired folder  `git clone git@bitbucket.org:dnlomnimedia/dnl-2017-webpack-starter-kit-js-only.git YOUR-PROJECT-FOLDER`
- Remove the link to the starterkit repository: `rm -rf YOUR-PROJECT-FOLDER/.git`
- Create your new repository in BitBucket, give it a name that follows the [naming conventions](http://intranet.dnlomnimedia.com/articles/repository-standards-best-practices). After the repository is created note the URL-PATH-TO-BITBUCKET-REPOSITORY
- Go into the starter kit folder `cd YOUR-PROJECT-FOLDER`
- Initalize a clean git repostiory `git init`
- Link the code in the folder to the repository created in BitBucket `git remote add origin URL-PATH-TO-BITBUCKET-REPOSITORY`
- Add you first set of files `git add *`
- Make the first commit `git commit -m "Checking in clone of starterkit"`, feel free to update the message
- Push the code to the origin `git push origin master`


## Build Setup & CLI commands

- Make sure node is installed, if not, please download the latest version for your operating system [here](https://nodejs.org/en/).
- Make sure you have installed both [ESLint](https://eslint.org/) and [sass-lint](https://www.npmjs.com/package/sass-lint) and configured them both properly with your text editor. If you are using Sublime Text, instructions can be found [here](http://intranet.dnlomnimedia.com/articles/sublime-text-packages). The sass-lint config can be found in the [DNL Snippets Repo](https://bitbucket.org/dnlomnimedia/dnl-snippets)
- After cloning this repo on your machine, ```cd``` into the directory and run the commands below in your terminal.

``` bash

# install dependencies
npm i

# serve with hot reload at localhost:8080
npm run start

# build for production with minification
npm run build

```

## Update Webpack.common.js
* update key ("dnl-changeme") in entry object (line 6) to follow project [naming conventions](http://intranet.dnlomnimedia.com/articles/file-naming-conventions).

## Update package.json Details

* name
* title
* version
* repository.url
* siteStatus

## Things to know
  - __jQuery__ is setup already by default to be included in a global scope. You can just write `$` or `jQuery` in your code and Webpack will pass in global jQuery definition into functions once it sees `$` or `jQuery` in your code. jQuery must be loaded separately in your index.html file or external site.

  - __Style Guide__ - We are utilizing [Airbnb's](https://github.com/airbnb/javascript) style guide for Javascript. This repo is already setup and configured accordingly as long as you have ESLint correctly installed on your machine.

  - __Scss Linting__ -

  - This repo makes use of various webpack plugins. In each webpack config file there are links to the plugins documentation in a comment just above where the plugin is initialized, typically at the very bottom of each config file.


# HTML templating:
* Create/modify the template.html file in `src/html/`
* Using multiple template files:
  * Each file must be prefixed with `template`, ex: "`template-test.html`"
  * Each file needs its own `HtmlWebpackPlugin` reference within the `webpack.dev.js` file's `plugins` (see the comments in plugin object) 
``` bash
# reference to another template file:
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/html/template-another-page.html',
      filename: './preview/another.html' //relative to root of the application
    })
```
