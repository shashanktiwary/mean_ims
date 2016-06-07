'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Imstheme = new Module('imstheme');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Imstheme.register(function(app, auth, database, system) {

  //We enable routing. By default the Package Object is passed to the routes
  Imstheme.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Imstheme.menus.add({
    title: 'imstheme example page',
    link: 'imstheme example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Imstheme.aggregateAsset('css', 'imstheme.css');


  // Set views path, template engine and default layout
  app.set('views', __dirname + '/server/views');
  
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Imstheme.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Imstheme.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Imstheme.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Imstheme;
});
