/// <reference path="typings/_custom.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {NamesList} from './services/NameList';

@Component({
  selector: 'app',
  viewInjector: [NamesList]
})
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [Home]
})
class App {}


bootstrap(App);
