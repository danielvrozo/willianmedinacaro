import { Component, OnInit } from '@angular/core';
import { BiografiaService } from 'src/app/apis/biografia/get/biografia.service';
import { RedirecLogin } from 'src/app/class/redirect';

@Component({
  selector: 'app-biografia-admin',
  templateUrl: './biografia-admin.component.html',
  styleUrls: ['./biografia-admin.component.css', '../admin.styles.css']
})
export class BiografiaAdminComponent implements OnInit {

  show = false;
  body:any;

  constructor(
    private _ApiBiografia: BiografiaService,
    private _VerificarLogin: RedirecLogin
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarInfo();

    this.VerificarLogin();
  }

  VerificarLogin(){
    this._VerificarLogin.IsLogin();
  }

  MostrarInfo(){
    this._ApiBiografia.ALL_GET('?id=1').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;
    });
  }

  
}
