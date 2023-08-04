import { Component, OnInit } from '@angular/core';
import { BannerGetService } from 'src/app/apis/banner/all/banner-get.service';
import { MeGetService } from 'src/app/apis/me/get/me-get.service';
import { AllVideoService } from 'src/app/apis/videos/all/all-video.service';
import { RedirecLogin } from 'src/app/class/redirect';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css', '../admin.styles.css']
})
export class HomeAdminComponent implements OnInit {
  show_me = false;
  body_me:any;
  image_bg:any;
  image_bg_responsive:any;
  constructor(
    private _ApiMe: MeGetService,
    private _VerificarLogin: RedirecLogin
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarInfoFrase();
    this.VerificarLogin();
  }

  VerificarLogin(){
    this._VerificarLogin.IsLogin();
  }


  MostrarInfoFrase(){
    this._ApiMe.GET_SHORT('?id=1').subscribe((data) => {
      this.show_me = true;
      this.body_me = data.body.content;
    });
  }

}
