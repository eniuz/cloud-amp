/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AmpMain} from './components/ampMain/ampMain';

/*
 * App Component
 * Top Level Component
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app',
  providers: [...FORM_PROVIDERS, ...HTTP_PROVIDERS ],
  directives: [...ROUTER_DIRECTIVES ],
  pipes: [],
  styles: [ require('./app.scss') ],
  template: require('./app.jade')
})
@RouteConfig([
  { path: '/', component: AmpMain, name: 'Main' }
])
export class App {
  name = 'CloudAmp';
  constructor() {

  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
