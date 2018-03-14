import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.loginEmail(this.email, this.password)
    .then((res) =>{
      this.flashMensaje.show('Has Iniciado Sesion correctamente.', 
      {cssClass: 'alert-success', timeout:4000});
      this.router.navigate(['privado']);
    }).catch((err) => {
      this.flashMensaje.show(err.messages, 
      {cssClass: 'alert-danger', timeout:4000});
      console.log(err);
      this.router.navigate(['/login']);
    });
  }
  onClickGoogleLogin(){
   this.authService.loginGoogle()
    .then((res) =>{
      this.router.navigate(['/privado']);
    }).catch( err => console.log(err.message));
    }
    onClickFacebookLogin(){
      this.authService.loginFacebook()
       .then((res) =>{
         this.router.navigate(['/privado']);
       }).catch( err => console.log(err.message));
      }
  }
