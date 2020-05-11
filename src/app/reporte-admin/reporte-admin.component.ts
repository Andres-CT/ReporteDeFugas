import { Component, OnInit } from '@angular/core';
import {  ReporteComponent } from '../reporte/reporte.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reporte-admin',
  templateUrl: './reporte-admin.component.html',
  styleUrls: ['./reporte-admin.component.scss']
})
export class ReporteAdminComponent implements OnInit {

  constructor(
    //public ReporteComponent: ReporteComponent
  ) {}

  ngOnInit(): void {
  }
  /*
  loadApiData() {
    this.ReporteComponent.registrationForm.setValue({
        nombre: 'Jorge',
        apellido: 'de la Vega',
        correo: '',
        direccion: '',
        referencia: '',
        tipoPersona: '',
        comentario: '',
        imagen: ''
    })
  }*/

}
