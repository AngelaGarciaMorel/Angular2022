import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  listaAlumnos: Alumno[] = [];
  formularioAlumno!:FormGroup;

  constructor( public fb: FormBuilder) { 

    this.formularioAlumno = fb.group({
      nombre: new FormControl('', [Validators.required,Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required,Validators.minLength(3)]),
      fecNacimiento: new FormControl('', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]),
      mail:new FormControl('', [Validators.required,Validators.email]),
      direccion:new FormControl('', [Validators.required]),
      telefono:new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
    })
  }

  ngOnInit(): void {
  }

  guardarAlumno(){
    let p: Alumno = this.formularioAlumno.value;
    this.listaAlumnos.push(p);
    console.log(this.formularioAlumno);
  }
}
