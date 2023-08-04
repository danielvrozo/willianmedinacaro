import { Component, OnInit } from '@angular/core';
import { SliderAllService } from 'src/app/apis/slider/slider-all.service';
import { RedirecLogin } from 'src/app/class/redirect';

@Component({
  selector: 'app-slider-admin',
  templateUrl: './slider-admin.component.html',
  styleUrls: ['./slider-admin.component.css', '../admin.styles.css']
})
export class SliderAdminComponent implements OnInit {

  show = false;
  body:any;
  constructor(
    private _Api: SliderAllService,
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
    this._Api.ALL('?id=ALL&dash=OK').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;
    });
  }

}
