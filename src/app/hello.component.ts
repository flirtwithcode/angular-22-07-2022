import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-app',
  template: `<h1>Hello </h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}
