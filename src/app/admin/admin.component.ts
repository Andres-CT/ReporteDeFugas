import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loginUserData = {}
  constructor(public fb: FormBuilder) { }
  
  registrationForm= this.fb.group({
    correo: [''],
    contrasena: ['']
  });
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.registrationForm.value);
  
  }
}
