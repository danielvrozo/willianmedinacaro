import { Component, OnInit } from '@angular/core';
import { AllGobiernoService } from 'src/app/apis/gobierno/all/all-gobierno.service';
import { RedirecLogin } from 'src/app/class/redirect';

@Component({
  selector: 'app-gobierno-admin',
  templateUrl: './gobierno-admin.component.html',
  styleUrls: ['./gobierno-admin.component.css', '../admin.styles.css']
})
export class GobiernoAdminComponent implements OnInit {

  show = false;
  body:any;
  constructor(
    private _ApiVerGobierno: AllGobiernoService,
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
    this._ApiVerGobierno.ALL_GET_GOBIERNO('?id=ALL').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;
    });
  }

}
