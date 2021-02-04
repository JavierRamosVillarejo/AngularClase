import { Component, OnInit } from '@angular/core';
import { CasasHowarts } from 'src/app/clases/casas-howarts';

@Component({
  selector: 'app-crud-howarts',
  templateUrl: './crud-howarts.component.html',
  styleUrls: ['./crud-howarts.component.css']
})
export class CrudHowartsComponent implements OnInit {

  alumnoNuevo: CasasHowarts = new CasasHowarts
  alumnos: CasasHowarts[]= []
  alumnoSeleccionado: CasasHowarts = new CasasHowarts
  indice : number

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('crudHowarts')!= null){
      this.alumnos = JSON.parse(localStorage.getItem('crudHowarts'))
      this.indice = this.alumnos[this.alumnos.length-1].id + 1
    } else{
      this.indice = 0
      }
  }
  
  insertarAlumno(): void{
    this.alumnoNuevo.id = this.indice
    this.indice++
    this.alumnos.push(this.alumnoNuevo)
    this.alumnoNuevo = new CasasHowarts()
    localStorage.setItem('crudhowarts', JSON.stringify(this.alumnos))
  }

}
