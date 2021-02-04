import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin= this.fb.group({
    
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
  constructor(private fb:FormBuilder, private serviciousuario:UserService) {}

  ngOnInit(): void {
  }

  submit():void{
    this.serviciousuario.acceso(this.formLogin.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.serviciousuario.guardarToken(respuesta)
      },
        error => console.log(error)
    )
  }

}
