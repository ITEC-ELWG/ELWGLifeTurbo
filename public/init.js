'use strict';

angular.element(document).ready(function() {
    //Fixing facebook bug with redirect
    if (window.location.hash === '#_=_') window.location.hash = '#!';

    //Then init the app
    angular.bootstrap(document, ['elwglife']);

});

// Dynamically add angular modules declared by packages
var packageModules = [];
for (var index in window.modules) {
    angular.module(window.modules[index].module, window.modules[index].angularDependencies || []);
    packageModules.push(window.modules[index].module);
}

// Default modules
var modules = [
    'ngCookies', 
    'ngResource', 
    'ngSanitize',
    'ui.bootstrap', 
    'ui.router', 

    'elwglife.system', 
    'elwglife.contacts'
];
modules = modules.concat(packageModules);

// Combined modules
angular.module('elwglife', modules);
