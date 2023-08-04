import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'willianmedina.com';

  constructor(){
    const storedItem = localStorage.getItem('access');
    const currentTime = new Date().getTime();
    if (storedItem) {
      const parsedItem = JSON.parse(storedItem);
      // Verificar si ha pasado más de 4 horas desde la última vez que se estableció
      if (currentTime > parsedItem.expiration) {
        // Han pasado más de 4 horas, realizar alguna acción o eliminar el valor del localStorage
        localStorage.removeItem('access');
      } else {
        // Aún dentro del período de 4 horas, usar el valor almacenado
        const myValue = parsedItem.value;
      }
    }
  }
}
