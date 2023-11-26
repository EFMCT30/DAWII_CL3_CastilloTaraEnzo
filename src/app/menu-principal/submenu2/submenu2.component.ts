import { Component } from '@angular/core';

@Component({
  selector: 'app-submenu2',
  templateUrl: './submenu2.component.html',
  styleUrls: ['./submenu2.component.css']
})
export class Submenu2Component {
  montoPrestamo: number = 0;
  cuotas: number = 0;
  montoPorCuota: number = 0;

  calcularPrestamo() {
    if (this.montoPrestamo > 5000) {
      this.cuotas = 3;
    } else if (this.montoPrestamo < 1000) {
      this.cuotas = 1;
    } else if (this.montoPrestamo >= 2000 && this.montoPrestamo <= 3000) {
      this.cuotas = 2;
    } else {
      this.cuotas = 5;
    }

    const interes = this.montoPrestamo < 4000 ? 0.12 : 0.10;
    const montoTotal = this.montoPrestamo * (1 + interes);

    this.montoPorCuota = montoTotal / this.cuotas;
  }
}
