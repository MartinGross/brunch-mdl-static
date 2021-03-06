# Static website generation skeleton for Brunch.io with Material Design Lite and BrowserSync

This skeleton can be used with [Brunch](http://brunch.io) to generate a static website based on Material Design Lite look.

Usage:
brunch new --skeleton https://github.com/MartinGross/brunch-mdl-static

## Getting started
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run build` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)

## Troubleshooting

For BrowserSync to work you need to have app.js at the end of the body in your html. See https://browsersync.io/ for more information.

## Based on
* https://github.com/bmatcuk/html-brunch-static
* https://github.com/ocombe/browser-sync-brunch
* http://handlebarsjs.com/

### Design & CSS
Currently uses 
* Material Design Lite: https://getmdl.io/index.html

or as an alternative
* https://materializecss.com/
