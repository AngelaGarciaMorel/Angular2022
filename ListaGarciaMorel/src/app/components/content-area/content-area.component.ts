import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {
  listaAlumnos : String[] = ['Angie Garcia','Mariela Segado','Juan Perez','Pedro Martinez','Raul Portal','Eva Green'];
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
