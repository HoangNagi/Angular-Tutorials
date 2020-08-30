import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
<button (click)="onClickButtongau()">Click parent button</button>
<app-hello [text]="title" (clickButtonmeo)="onMeoClick($event)"></app-hello>
<app-hi></app-hi>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title='hello meo meo';
// onButtonClickHello(event: string) {
// this.title = event;
// }
onClickButtongau(){
  this.title = 'hi gau gau';
}
onMeoClick(event: string){
console.log(event, 'meo meo');
this.title = event;
}
 }
