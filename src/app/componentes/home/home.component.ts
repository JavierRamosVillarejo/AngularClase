import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelos/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  letras = ["a","b","c"];

  usuarios = [
    {
      nombre : "Manolo",
      apellido: "Fernandez"
    },
    {
      nombre : "Javier",
      apellido: "Ramos"
    },
    {
      nombre : "Pepe",
      apellido: "Hernandez"
    }
  ]

  usuarios2: Usuario [] = [
    {
      nombre : "Juan",
      apellido: "Fernandez"
    },
    {
      nombre : "Jesus",
      apellido: "Sepelveda"
    },
    {
      nombre : "Jaime",
      apellido: "Lara"
    }
  ]

  usuario3: Usuario = new Usuario("Javier", "Ramos", 24);

  numero1 = 0;
  numero2 = 0;

  usuarioclic = "";

  mostrarUsuario(usuario){
    this.usuarioclic = usuario.nombre +" "+usuario.apellido;
  }

  calculaSuma(){
    return this.numero1 + this.numero2;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // alert('Hasta luego');
  }

}
