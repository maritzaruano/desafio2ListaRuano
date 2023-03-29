import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  public loading = true;
  public usuarios: Usuario[] = [
    new Usuario(1, 'Juan', 'Perez', 'JuanPerez@Gmail.com', 31, true, new Date('1992-01-15'), 'colombia'),
    new Usuario(2, 'Pepa', 'Pombo', 'PEPAPOMBO@hotmail.com', 35, false, new Date('1988-05-14'), 'mexico'),
    new Usuario(3, 'Jhon', 'Aguiar', 'JHONAGUiar@gmail.com', 30, false, new Date('1993-02-26'), 'argentina'),
    new Usuario(4, 'Pedro', 'Diaz', 'PeDroDiaz@gmail.com', 20, true, new Date('2003-08-12'), 'chile'),
    new Usuario(5, 'Diego', 'Gomez', 'DIEGOGOMEZ@Gmail.com', 21, true, new Date('2002-07-24'), 'venezuela'),
  ];
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
  tituloTabla = false;
  tituloColumna = true;

  getFontSize(arg: number): string{
    switch (arg) {
      case 1:
        return'30px'
      case 2:
        return'13px'
        break;
    
      default:
        return '16px';
    }
  }



}
