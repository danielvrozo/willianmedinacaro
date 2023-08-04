import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BannerGetService } from 'src/app/apis/banner/all/banner-get.service';
import { BannerUpService } from 'src/app/apis/banner/update/banner-up.service';



@Component({
  selector: 'app-editar-home',
  templateUrl: './editar-home.component.html',
  styleUrls: ['./editar-home.component.css', '../../../admin.styles.css']
})
export class EditarHomeComponent implements OnInit {
  
  show = false;
  body:any;
  response:any = {};
  code:any;
  constructor(
    private _ApiBanner: BannerGetService,
    private _ApiUpdateBanner: BannerUpService
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarInfoBanner();
  }

  MostrarInfoBanner(){
    this._ApiBanner.ALL_GET('?id=1').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;

      this.response = {
        titulo: this.body[0]['titulo'],
        descripcion: this.body[0]['descripcion'],
        img_pc: this.body[0]['imagen_url'],
        img_mobile: this.body[0]['imagen_responsive']
      }
    });
  }

  Save(form: NgForm){

    this._ApiUpdateBanner.UPDATE(
      {
        titulo: form.form.controls['titulo']['value'],
        descripcion: form.form.controls['descripcion']['value'],
        imagen_url: form.form.controls['img_pc']['value'],
        imagen_responsive: form.form.controls['img_mobile']['value']
      }
    ).subscribe((data) => {
      this.code = true;
      setTimeout(() => {
        this.code = false;
      }, 5000);
    })
  }
}
