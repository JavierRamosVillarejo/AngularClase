import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Modelos/user';
import { UserService } from 'src/app/services/user.service';
import { dniValido } from 'src/app/validaciones/dni-valido';
import { telefonoValido } from 'src/app/validaciones/tlf-valido';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil: User = {};
  mostrarEditar: boolean 
  mostrarEliminar: boolean 
  inputBorrar: string = ''
  
  formPerfil = this.fb.group({
    nombre:[''],
    apellidos:[''],
    password:['', [Validators.minLength(4)]],
    email:['', [ Validators.email]],
    telefono:[undefined,[telefonoValido()]],
    dni:['', [dniValido()]]

  })

  constructor(private servicioUsusario:UserService, private fb: FormBuilder, private irHacia:Router) { }

  ngOnInit(): void {
    this.cargarPerfil()
  }
  

   cargarPerfil(): void{

    this.servicioUsusario.obtenerPerfil().subscribe(

      respuesta=> {
        console.log(respuesta)
        this.perfil = respuesta
        this.formPerfil.patchValue(respuesta)
      },
      error => console.log(error)

    )
  }

  editarPerfil():void{
    this.servicioUsusario.editarPerfil(this.formPerfil.value).subscribe(
      respuesta => {
        console.log(respuesta)
        
        this.cargarPerfil()
      },
      error=> console.log(error)
    )
  }

  eliminarUsuario():void{
    this.servicioUsusario.eliminarUsuario().subscribe(
      respuesta=> {
        console.log(respuesta)
        this.servicioUsusario.logOut()
        this.irHacia.navigate((['/login']))
        
      }
    )
  }

}
