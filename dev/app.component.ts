import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container-fluid">
            {{onTest()}}
            <input type="text" class="form-control" [value]="name" [ngClass]="{red: true}" (keyup)="onKeyUp(inpuElement.value)" #inpuElement>
            <p>{{values}}</p>
            <br>
            <input type="text" class="form-control" [(ngModel)]="name">
            <p>Your Name: {{name}}</p>
        </div>
    `,
    directives: [],
})

export class AppComponent {
    name = 'kiga';
    values = '';

    onTest() {
        return 1 === 1;
    }

    onKeyUp(value: string) {
        this.values += value + ' | ';
    }
}
