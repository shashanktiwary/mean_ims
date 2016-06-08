(function () {
  'use strict';

  //Setting up the users api
  var location = require('../controllers/location');
  
  var hasAuthorization = function(req, res, next) {
    // if (!req.user.isAdmin) {
    //     return res.send(401, 'User is not authorized');
    // }
    next();
  };

  /* jshint -W098 */
  // The Package is past automatically as first parameter
  module.exports = function (Imscore, app, auth, database) {

    app.get('/api/imscore/locations', hasAuthorization, location.all);
    
    app.route('/api/imscore/locations:id')
       .get(hasAuthorization, location.get);
    
    app.get('/api/imscore/example/anyone', function (req, res, next) {
      res.send('Anyone can access this');
    });

    app.get('/api/imscore/example/auth', auth.requiresLogin, function (req, res, next) {
      res.send('Only authenticated users can access this');
    });

    app.get('/api/imscore/example/admin', auth.requiresAdmin, function (req, res, next) {
      res.send('Only users with Admin role can access this');
    });

    app.get('/api/imscore/example/render', function (req, res, next) {
      Imscore.render('index', {
        package: 'imscore'
      }, function (err, html) {
        //Rendering a view from the Package server/views
        res.send(html);
      });
    });
  };
})();
