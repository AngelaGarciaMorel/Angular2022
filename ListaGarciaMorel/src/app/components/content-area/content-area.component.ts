import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {
  //listaAlumnos : String[] = ['Angie Garcia','Mariela Segado','Juan Perez','Pedro Martinez','Raul Portal','Eva Green'];
  //listaFechaInscrip : Date[] = [new Date('01/03/2022'),new Date('02/03/2022'),new Date('03/03/2022'),new Date('04/03/2022'),new Date('05/03/2022'),new Date('06/03/2022')];
  
  listaAlumnos : any = [
    {nombre:'Angie Garcia',   fecInscrip : new Date('01/03/2022')},
    {nombre:'Mariela Segado', fecInscrip : new Date('02/02/2022')},
    {nombre:'Juan Perez',     fecInscrip : new Date('03/01/2022')},
    {nombre:'Pedro Martinez', fecInscrip : new Date('04/03/2022')},
    {nombre:'Raul Portal',    fecInscrip : new Date('05/03/2022')},
    {nombre:'Eva Green',      fecInscrip : new Date('06/03/2022')}
  ];
  
  txtStyle : string = "";
  constructor() { }

  ngOnInit(): void {
  }

  toRed(){
    this.txtStyle = 'text-red';
  }
  toYellow(){
    this.txtStyle = 'text-yellow';
  }  
  toGreen(){
    this.txtStyle = 'text-green';
  }
  toDefault(){
    this.txtStyle = 'text-default';
  }
}
