### Reproducing the issue

This repository is based on the [angular2-seed](https://github.com/mgechev/angular2-seed).

run the application with these commands:

    npm install
    gulp
    gulp serve.dev

### Issue description

The application attempts to pass an input value to a custom directive via a property binding, see `home.html`:

    <div>
        <button (click)="onClick()">Trigger @Directive binding</button>
        <div custom-directive [input]="inputData">
    </div>


  When the button is clicked, the click handler gets triggered and sets some value to inputData, see `home.ts`. 

  But that change is never visible to the custom directive via the `onChange()` lifecycle method.