import { Component } from '@angular/core';


@Component({
  selector: 'app-submenu1',
  templateUrl: './submenu1.component.html',
  styleUrls: ['./submenu1.component.css']
})
export class Submenu1Component {
  cantidad: number = 0;
  precio: number = 0;
  mostrarResultado: boolean = false;
  totalAPagar: number = 0;

  calcularDescuento() {
    const total = this.cantidad * this.precio;

    if (total > 200) {
      this.totalAPagar = total * 0.8; // Aplica el descuento del 20%
    } else {
      this.totalAPagar = total;
    }

    this.mostrarResultado = true;
  }

}
