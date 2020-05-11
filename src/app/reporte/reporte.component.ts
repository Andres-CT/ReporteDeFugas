import { Component, OnInit } from '@angular/core';
import { User } from './user'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  tipoPersonas = ["Reportero","Agente de la SSP", "Transeunte", "Comerciante", "Otro"];
  userModel = new User('','','','','', '','', null);

  registrationForm= this.fb.group({
    nombre: ['Jorge'],
    apellido: [''],
    correo: [''],
    direccion: [''],
    referencia: [''],
    tipoPersona: [''],
    comentario: [''],
    imagen: ['']

  });
  /*
  registrationForm = new FormGroup({
      nombre: new FormControl('Jorge'),
      apellido: new FormControl(''),
      correo: new FormControl(''),
      direccion: new FormControl(''),
      referencia: new FormControl(''),
      tipoPersona: new FormControl(''),
      comentario: new FormControl(''),
      imagen: new FormControl('')
  });*/
  
  ngOnInit(): void {
  }

}
