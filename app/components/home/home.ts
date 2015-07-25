/// <reference path="../../typings/_custom.d.ts" />
import {Component, View} from 'angular2/angular2';
import {Custom, NavigationAction} from '../custom/Custom';

@Component({
  selector: 'component-1'
})
@View({
  templateUrl: './components/home/home.html',
  directives: [Custom]
})
export class Home {

    onClick() {
        console.log("the click handler gets triggered ..");
        this.inputData = Math.random();
    }

}
