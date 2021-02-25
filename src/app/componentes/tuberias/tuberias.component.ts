import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.css']
})
export class TuberiasComponent implements OnInit {
  usuario: string="Javier Ramos Villarejo"
  mes: string = "MAYO"
  texto: string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
  fecha: Date = new Date()
  dinero: number =12.40
  numero_pi: number = Math.PI
  preposiciones: string[] = ['a', 'ante', 'bajo', 'cabe', 'con', 'contra', 'de', 'desde', 'en', 'entre']
  usuarios =[
    {nombre: "Javier", apellido: "Ramos", edad: 17},
    {nombre: "Juanjo", apellido: "Lopez", edad: 32},
    {nombre: "David", apellido: "Moreno", edad: 41}
  ]
  dni: number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
