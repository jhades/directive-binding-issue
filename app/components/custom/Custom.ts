
import {Directive, View, onChange} from 'angular2/angular2';

@Directive({
    selector:'[custom-directive]',
    properties: ['input'],
    lifecycle: [onChange]
})
export class Custom {

    constructor() {
        console.log('detected custom directive..');
    }

    onChange(changes) {
        // this never gets logged
        console.log(changes);
    }

}

