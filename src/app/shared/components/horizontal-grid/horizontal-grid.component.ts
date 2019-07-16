import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Emoji, Confirmable } from '../../decorators';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalGridComponent implements OnInit {

  // private _username = '';
  // @Output() usernameChange = new EventEmitter();
  // @Emoji() result='Hello';
  @Input() cols = 8;
  @Input() displayCols = 5;
  sliderMargin = '0';

  constructor() { }

  ngOnInit() {
  }

  // this is a method, but when using it outside just regard it as  an attribute.
  public get scrollable() : boolean {
    return this.cols > this.displayCols;
  }

  public get templateRows() : string {
    return `minmax(auto, max-content)`;
  }


  public get templateColumns(): string {
    return `repeat(${this.cols}, 
            calc( (100vw - ${this.displayCols * 0.4}rem) / 
                  ${this.displayCols} )
            )`;
  }

  handleScroll(ev) {
    this.sliderMargin = `0 ${100 * ev.target.scrollLeft / ev.target.scrollWidth}%`
  }
  

  // @Input()
  // public get username() : string {
  //   return this._username;
  // }

  // public set username(value: string) {
  //   this._username = value;
  //   this.usernameChange.emit(value);
  // }

  // @Confirmable('Are you sure to do something?')
  // handleClick() {
  //   console.log('handle click works');
  // }
}
