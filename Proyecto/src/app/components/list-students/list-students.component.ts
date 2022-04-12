import { Component, OnInit } from '@angular/core';
import { max, Subject } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
// import { ConcatenarPipe } from 'src/app/pipes/concatenar.pipe';
// import { Tam20Directive } from 'src/app/directives/tam20.directive';


@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})

export class ListStudentsComponent implements OnInit {

  
  listaAlumnos : Alumno[] = [];
  alumnoModificado: Alumno = new Alumno;

  mostrarComponente: boolean = false;

  constructor( ) { }

  ngOnInit(): void {
  }
  mostrarFormAgregarAlumno(){
      this.mostrarComponente = true;
      this.alumnoModificado.id = 0;
  }

  ocultarFormAgregarAlumno(){
    this.mostrarComponente = false;

  }

  agregarAlumno(newStudent: any){
    let student: Alumno = newStudent;
    let maxId = 0;
    if(this.listaAlumnos.length > 0){
      maxId = Math.max.apply(Math, this.listaAlumnos.map(function(o) { return o.id!; }));
    }
    student.id = maxId + 1;
    this.listaAlumnos.push(student);
    this.ocultarFormAgregarAlumno();
  }
  modificarAlumno(alumno: Alumno){
    console.log('tamaño lista: '+this.listaAlumnos.length);
    console.log('valor id: '+this.listaAlumnos[0].nombre);
    for (let index = 0; index < this.listaAlumnos.length; index++) {
      console.log('lista: '+this.listaAlumnos[index].id);
      
      if(this.listaAlumnos[index].id == alumno.id){
        console.log('entro');
        this.listaAlumnos[index].nombre = alumno.nombre;
        this.listaAlumnos[index].apellido = alumno.apellido;
        this.listaAlumnos[index].direccion = alumno.direccion;
        this.listaAlumnos[index].fecNacimiento = alumno.fecNacimiento;
        this.listaAlumnos[index].mail = alumno.mail;
        this.listaAlumnos[index].telefono = alumno.telefono;
      }
    }
    console.log('lista final: '+this.listaAlumnos[0].id);
    this.ocultarFormAgregarAlumno();
  }

  modificar(id: any){
    let s: any;

    s =this.listaAlumnos.find(x => x.id == id);
    this.mostrarFormAgregarAlumno();
    this.alumnoModificado = s;

  }

  eliminarAlumno(id: any){
    for (let index = 0; index < this.listaAlumnos.length; index++) {
      if (this.listaAlumnos[index].id == id) {
        this.listaAlumnos.splice(index,1);  
      }
    }
    return this.listaAlumnos;
  }

}
