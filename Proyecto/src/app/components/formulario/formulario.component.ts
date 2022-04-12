import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input() alumnoModificado!: Alumno;

  mostrarEditar: boolean = false;
  mostrarAgregar: boolean = true;

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

      if(this.alumnoModificado.id! > 0){
        this.formularioAlumno.setValue({
          nombre: this.alumnoModificado.nombre,
          apellido: this.alumnoModificado.apellido,
          fecNacimiento: this.alumnoModificado.fecNacimiento,
          mail: this.alumnoModificado.mail,
          direccion: this.alumnoModificado.direccion,
          telefono: this.alumnoModificado.telefono
       });
       this.mostrarButtonEditar();
      }
  }
  
  @Output() onSave:EventEmitter<Alumno> =  new EventEmitter<Alumno>();  
  @Output() onChange:EventEmitter<Alumno> =  new EventEmitter<Alumno>();  

  mostrarButtonEditar(){
    this.mostrarEditar = true;
    this.mostrarAgregar = false;
  }

  guardarAlumno(){
    let newStudent: Alumno = this.formularioAlumno.value;
    this.formularioAlumno.reset();
    newStudent.fecInscrip = new Date();
    this.onSave.emit(newStudent);
  }

  modificarAlumno(){
    let newStudent: Alumno = this.formularioAlumno.value;
    newStudent.id = this.alumnoModificado.id;

    this.formularioAlumno.reset();
    newStudent.fecInscrip = new Date();
    this.alumnoModificado.id = 0;
    this.onChange.emit(newStudent);
  }
}
