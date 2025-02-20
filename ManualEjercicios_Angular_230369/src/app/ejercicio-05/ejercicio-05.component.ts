import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-05',
  imports: [],
  templateUrl: './ejercicio-05.component.html',
  styleUrl: './ejercicio-05.component.css'
})
export class Ejercicio05Component {
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  users = [{id: 0, name: 'Tania'}, {id: 1, name: 'Daniela'}, {id: 2, name: 'Edgar'}, {id: 3, name: 'Esther'}, {id: 4, name: 'Angel'}, {id: 4, name: 'Idai'}];
}
