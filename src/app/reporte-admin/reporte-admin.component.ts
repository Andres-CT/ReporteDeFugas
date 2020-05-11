import { Component, OnInit } from '@angular/core';
import {  ReporteComponent } from '../reporte/reporte.component';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-reporte-admin',
  templateUrl: './reporte-admin.component.html',
  styleUrls: ['./reporte-admin.component.scss']
})
export class ReporteAdminComponent implements OnInit {
  text='';
  apellido = '';
  constructor(//public ReporteComponent: ReporteComponent
  private data: DataService) {}
  
  

  ngOnInit(): void {
    this.data.share.subscribe(a => this.text = a);
    this.data.share2.subscribe(b => this.apellido = b);
    
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
