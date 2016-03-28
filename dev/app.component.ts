import {Component} from 'angular2/core';
import {PropertyBindingComponent} from './property-binding.component';

@Component({
    selector: 'my-app',
    template: `
        <section class="parent">
            <h2>This is the parent component</h2>
            <h4>Please enter your name</h4>
            <input type="text" class="form-control" [(ngModel)]="name">
            <br>
            <section class="child">
                <my-property-binding [name]="name"></my-property-binding>
            </section>
        </section>
    `,
    directives: [PropertyBindingComponent],
})

export class AppComponent {
    name = '';
}
