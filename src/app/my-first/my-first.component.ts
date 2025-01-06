import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss'],
})
export class MyFirstComponent {
  @Input() headerTitle = 'My first component';
  @Output() myEvent = new EventEmitter<string>();

  backgroundColor = 'lightgray';
  textColor = 'red';

  public event?: MouseEvent;
  public clientX = 0;
  public clientY = 0;
  public onEvent(event: MouseEvent): void {
    this.event = event;
  }
  public coordinates(event: MouseEvent): void {
    this.clientX = event.clientX;
    this.clientY = event.clientY;
  }

  sendEvent() {
    this.myEvent.emit(this.headerTitle);
  }

  onKeyEvent($event: Event) {
    console.log($event);
  }
}
