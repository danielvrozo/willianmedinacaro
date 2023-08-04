import { Component, OnInit } from '@angular/core';
import { AllNoticiasService } from 'src/app/apis/noticias/all/all-noticias.service';
import { RedirecLogin } from 'src/app/class/redirect';

@Component({
  selector: 'app-noticias-admin',
  templateUrl: './noticias-admin.component.html',
  styleUrls: ['./noticias-admin.component.css', '../admin.styles.css']
})
export class NoticiasAdminComponent implements OnInit {

  show = false;
  body:any;
  constructor(
    private _Api: AllNoticiasService,
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
    this._Api.ALL_GET_NOTICIAS('?id=ALL&dash=OK').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;
    });
  }
}
