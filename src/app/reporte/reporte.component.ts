import { Component, OnInit } from '@angular/core';
//import { User } from './user'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
//import { NgForm } from '@angular/forms';
import { ReportserviceService } from '../reportservice.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {

  constructor(public fb: FormBuilder, public _reportService: ReportserviceService) { }
  tipoPersonas = ["Reportero","Agente de la SSP", "Transeunte", "Comerciante", "Otro"];
  //userModel = new User('','','','','', '','', null);

  registrationForm= this.fb.group({
    nombre: [''],
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
  onSubmit() {
    console.log(this.registrationForm.value);
    /* 
    this._reportService.reportservice(this.registrationForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.log('Error!', error)
      ); */
  }
}
