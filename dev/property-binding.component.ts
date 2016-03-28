import {Component} from 'angular2/core';

@Component({
    selector: 'my-property-binding',
    template: `
        <h2>This is the child component</h2>
        <p>Hey {{name}}!!</p>
    `,
    directives: [],
    inputs: ['name'],
})

export class PropertyBindingComponent {
    name = '';
}
