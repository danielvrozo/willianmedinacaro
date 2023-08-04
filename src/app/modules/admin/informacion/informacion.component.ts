import { Component, OnInit } from '@angular/core';
import { InfoAllService } from 'src/app/apis/info/info-all.service';
import { RedirecLogin } from 'src/app/class/redirect';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css', '../admin.styles.css']
})
export class InformacionComponent implements OnInit {

  show = false;
  body:any;

  constructor(
    private api: InfoAllService,
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
    this.api.GET().subscribe((data) => {
      this.show = true;
      this.body = data.body.content;
    });
  }

}
