import { Component, OnInit } from '@angular/core';
import { ContactoAllService } from 'src/app/apis/contacto/contacto-all.service';
import { RedirecLogin } from 'src/app/class/redirect';

@Component({
  selector: 'app-contacto-admin',
  templateUrl: './contacto-admin.component.html',
  styleUrls: ['./contacto-admin.component.css', '../admin.styles.css']
})
export class ContactoAdminComponent implements OnInit {

  show = false;
  body:any;
  constructor(
    private _Api: ContactoAllService,
    private _VerificarLogin: RedirecLogin
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.Mostrar();
    this.VerificarLogin();
  }

  VerificarLogin(){
    this._VerificarLogin.IsLogin();
  }

  Mostrar(){
    this._Api.ALL('?id=ALL').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;
    });
  }

}
