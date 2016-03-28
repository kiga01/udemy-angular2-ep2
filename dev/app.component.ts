import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container-fluid">
            {{onTest()}}
            <input type="text" class="form-control" value="{{name}}" class="{{'red'}}">
        </div>
    `,
    directives: [],
})

export class AppComponent {
    name = 'kiga';

    onTest() {
        return 1 === 1;
    }
}
