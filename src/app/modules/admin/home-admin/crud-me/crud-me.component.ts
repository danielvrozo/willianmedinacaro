import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MeGetService } from 'src/app/apis/me/get/me-get.service';

@Component({
  selector: 'app-crud-me',
  templateUrl: './crud-me.component.html',
  styleUrls: ['./crud-me.component.css', '../../admin.styles.css']
})
export class CrudMeComponent implements OnInit {

  show = false;
  body:any;
  response:any = {};
  code:any;
  image_url:any;

  constructor(
    private _Api: MeGetService
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarInfoBanner();
  }

  MostrarInfoBanner(){
    this._Api.GET_SHORT('?id=1').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;

      this.response = {
        titulo: this.body[0]['titulo'],
        descripcion: this.body[0]['descripcion'],
        imagen_url: this.body[0]['imagen_url']
      }
    });
  }

  Save(form: NgForm){

    let formData = new FormData();

    this.image_url = this.image_url ?? this.response.imagen_url

    formData.append('titulo', form.form.controls['titulo']['value']);
    formData.append('descripcion', form.form.controls['descripcion']['value']);
    formData.append('imagen_url', this.image_url);


    this._Api.UPDATE(formData).subscribe((data) => {
      console.log(data);
      this.code = true;
      setTimeout(() => {
        this.code = false;
      }, 5000);
    })
  }

  onFileImgUrl(event:any): void {
    this.image_url = event.target.files[0];
  }

}
