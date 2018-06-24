<h1>ETR modularization demo</h1>

## Grunt + WEBPACK + JSP 

### Description
Modular javascript and use es6 in JSP project. Generate JSP pages with bundled files. Compatible with Hybris.

### Include
* Mutiple page application
* JSP support
* ES6 support
* Exract common codes
* Uglify
* File Hash
* ……


### Main floder description
```
├── dev
|  ├── js
|     └── module    // js modules by functionality
|     └── src       // each page has a js entry, the same name with pages.
|  ├── views        // all jsp file template 
├── dist            // all generated files after npm run
```

### Run demo 
* node.js 8+
* npm 5+

`npm install`

`npm run dev`

The pages and js files are all in 'dev' floder. After run this command, you'll see in the 'dist/dev' folder, jsp and js files are generated by webpack. If we use the same module more than 2 times (it can be set in the configuration), webpack will exract it into common files. (dist/dev/js/common.js) 

`npm run build`

It'll generate the uglify js files.
