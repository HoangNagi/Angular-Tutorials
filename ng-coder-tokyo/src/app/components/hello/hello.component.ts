import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
selector: 'app-hello',
template: `
<button (click)="onClickButton()">Click child button</button>
<h1>{{text}} from parent</h1>
`
})
export class HelloComponent implements OnInit, OnChanges {
  @Input() text: string;
  @Output() clickButtonmeo: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _dataService: DataService){
  }

  onClickButton(){
    this.text = "Hello";
    this.clickButtonmeo.emit(this.text);
    this._dataService.setTextFromHello(this.text);
  }
  ngOnInit(): void {
    this._dataService.setTextFromHello(this.text);
  }
  ngOnChanges(): void {}
}
