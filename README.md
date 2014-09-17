html-initializer
================

An html project initializer/bootstrapper. This project provides you a starting point for your web projects that includes the latest version of [twitter bootstrap](http://getbootstrap.com/), [Jquery](http://jquery.com/), [Modernizr](http://modernizr.com/) and [Font Awesome](http://fortawesome.github.io/Font-Awesome/). This project also comes with a simple web server, (connect)[https://github.com/senchalabs/connect], to test your web pages without having to rely on heavy web servers like apache.

html-initializer uses bower as dependency manager and gulp as task runner.

## Project startup

To begin a project simply clone this repository and run the init.sh script:

```shell
git clone https://github.com/xoner/html-initializer . && ./init.sh
```

This will install all node dependencies and bower components, and run the `gulp init` task and cleanup the git related stuff. The `gulp init` puts all the needed stylesheets and javascript files from the bower dependencies under css and js folders, and minimize/uglify them if needed.

## Testing web server

Once you have initialized your project, you can run `gulp serve` to start a simple testing web server and point your browser to [http://localhost:8000](http://localhost:8000) to start viewing and/or debugging your webpages.

## Disclaimer

This project is highly inspired with [Initializr](http://www.initializr.com/) (In fact we have stolen their index.html bootstrap page), but tries to accomplish similar goals using the modern web development tools available.