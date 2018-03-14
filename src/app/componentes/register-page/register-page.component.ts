import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public autService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.autService.registerUser(this.email, this.password)
    .then( (res) =>{
      this.flashMensaje.show('Usuario Creado correctamente.', 
      {cssClass: 'alert-success', timeout:4000});
      this.router.navigate(['/privado']);       
    }).catch( (err) => {
      this.flashMensaje.show(err.message, 
      {cssClass: 'alert-danger', timeout:4000});
      });
  }
}
