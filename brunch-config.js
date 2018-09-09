// See http://brunch.io for documentation.
/*
exports.files = {
  javascripts: {joinTo: 'app.js'},
  stylesheets: {joinTo: 'app.css'}

  npm: {
    styles: {
      'material-design-lite': [
        'dist/material.min.css',
      ],
    },
  },

};
*/

module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/,
      },
    },
    stylesheets: {
      joinTo: {
        'app.css': /^app/,
        'vendor.css': /^(?!app)/,
      },
    },
  },
  npm: {
    styles: {
      'material-design-lite': [
        'dist/material.min.css',
      ],
    },
  },

  plugins: {
    "static": {
            processors: [
              require('html-brunch-static')({
                handlebars: {
                  enableProcessor: true
                }
              })
            ]
      }
  }        
};

