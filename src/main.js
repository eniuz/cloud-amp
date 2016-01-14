"use strict";
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var app_1 = require('./app/app');
document.addEventListener('DOMContentLoaded', function main() {
    browser_1.bootstrap(app_1.App, ('production' === process.env.ENV ? [] : browser_1.ELEMENT_PROBE_PROVIDERS).concat(http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, [
        core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
    ]))
        .catch(function (err) { return console.error(err); });
});
//# sourceMappingURL=main.js.map