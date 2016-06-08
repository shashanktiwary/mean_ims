'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Imscore = new Module('imscore');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Imscore.register(function(app, auth, database, admin) {

  var icons = 'admin/assets/img/icons/';
  //We enable routing. By default the Package Object is passed to the routes
  Imscore.routes(app, auth, database);
  
//   admin.menus.add({
//         roles: ['admin'],
//         title: 'Location',
//         link: 'location',
//         icon: icons + 'modules.png',
//         menu: 'main'
//     });
  
  //We are adding a link to the main menu for all authenticated users
  Imscore.menus.add({
    title: 'imscore example page',
    link: 'imscore example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Imscore.aggregateAsset('css', 'imscore.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Imscore.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Imscore.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Imscore.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Imscore;
});
