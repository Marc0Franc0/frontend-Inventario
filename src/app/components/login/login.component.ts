
import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Credentials } from 'src/entity/Credentials';
import { Producto } from 'src/entity/producto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
constructor(private api:ApiService,private router:Router){}
listaProductos: Producto[]|undefined;
creds:Credentials={
  email:'',
  password:''
}



public doLogin() {
   this.api.login(this.creds).subscribe((rta:any )=>{

localStorage.setItem('Token',rta.token);
this.router.navigate(['home']);
   }

   )



}

}
