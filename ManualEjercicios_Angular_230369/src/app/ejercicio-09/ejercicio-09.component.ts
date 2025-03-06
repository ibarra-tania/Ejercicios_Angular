import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ejercicio-09',
  imports: [],
  templateUrl: './ejercicio-09.component.html',
  styleUrl: './ejercicio-09.component.css'
})
export class Ejercicio09Component {
  @Output() incrementCountEvent = new EventEmitter<number>();
  @Output() addItemEvent = new EventEmitter<string>()
  count=0;

  onClick() {
      this.count++;
      this.incrementCountEvent.emit(this.count);
    }
  addItem(){
    this.addItemEvent.emit('🐢');
  }
  
}
