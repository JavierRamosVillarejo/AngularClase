import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { accesoUsuario, User } from '../clases/user';
import { Usuario } from '../Modelos/usuario';
const url = 'http://localhost:3000/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

    registrar(usuario: User): Observable<any>{
      return this.http.post(url, usuario)
    }

    guardarToken(token:string):void{
      localStorage.setItem('userToken', token)
    }

    acceso (usuario:accesoUsuario): Observable<any>{
      return this.http.post(url+'login',usuario)
    }

   
}
