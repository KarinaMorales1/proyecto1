import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto1';
  persona={
    nombre: "Brenda",
    apellido: "Rodriguez",
    alias: "Bren",
    edad: 17
  }
  persona1={
    nombre: "Daiana",
    apellido: "Saucedo",
    alias: "Rubia",
    edad: 18
  }
}

