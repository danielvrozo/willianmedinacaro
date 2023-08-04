import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/apis/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  opacity = 1;
  error:any;
  msg:any;

  constructor(
    private ApiLogin: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.opacity = .4;
    // Validar los campos obligatorios antes de enviar el formulario
    if (!this.email || !this.password) {
      this.opacity = 1;
      this.error = true;
      this.msg = "Debes llenar todos los campos.";
      setTimeout(() => {
        this.error = false;
      }, 5000);
    } else {
      this.error = false;
      this.ApiLogin.LOGIN({
        "correo": this.email,
        "password": this.password
      }).subscribe((data) => {
        this.opacity = 1;
        if(data.body.status === 400) {
          this.error = true;
          this.msg = data.body.msg;
        }

        if(data.body.status === 200){
          const currentTime = new Date().getTime();
          // Calcular la marca de tiempo después de 4 horas (en milisegundos)
          const expirationTime = currentTime + 4 * 60 * 60 * 1000;
          // Establecer el valor y la marca de tiempo en el localStorage
          localStorage.setItem('access', JSON.stringify({ value: 'true', expiration: expirationTime }));

          this.navigateToAdmin();

        }
      });
      
    }
  }

  navigateToAdmin() {
    this.router.navigate(['/admin/home']);
  }
}
