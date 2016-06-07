(function () {
  'use strict';

  /* jshint -W098 */
  // The Package is past automatically as first parameter
  module.exports = function (Imstheme, app, auth, database) {

    app.get('/api/imstheme/example/anyone', function (req, res, next) {
      res.send('Anyone can access this');
    });

    app.get('/api/imstheme/example/auth', auth.requiresLogin, function (req, res, next) {
      res.send('Only authenticated users can access this');
    });

    app.get('/api/imstheme/example/admin', auth.requiresAdmin, function (req, res, next) {
      res.send('Only users with Admin role can access this');
    });

    app.get('/api/imstheme/example/render', function (req, res, next) {
      Imstheme.render('index', {
        package: 'imstheme'
      }, function (err, html) {
        //Rendering a view from the Package server/views
        res.send(html);
      });
    });
  };
})();
