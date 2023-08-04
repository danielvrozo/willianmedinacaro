import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BiografiaService } from 'src/app/apis/biografia/get/biografia.service';
import { BiografiaUpService } from 'src/app/apis/biografia/update}/biografia-up.service';
import { RedirecLogin } from 'src/app/class/redirect';

@Component({
  selector: 'app-editar-bio',
  templateUrl: './editar-bio.component.html',
  styleUrls: ['./editar-bio.component.css', '../../../admin.styles.css']
})
export class EditarBioComponent implements OnInit {

  show = false;
  body:any;
  response:any = {};
  code:any;
  image_url:any;
  pdf_url:any;
  opacity:any = 1;

  constructor(
    private _ApiBiografia: BiografiaService,
    private _ApiUpdateBiografia: BiografiaUpService,
    private _VerificarLogin: RedirecLogin
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarInfoBanner();
    this.VerificarLogin();
  }

  VerificarLogin(){
    this._VerificarLogin.IsLogin();
  }

  MostrarInfoBanner(){
    this._ApiBiografia.ALL_GET('?id=1').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;

      this.response = {
        titulo: this.body[0]['titulo'],
        descripcion: this.body[0]['descripcion'],
        imagen_url: this.body[0]['imagen_url'],
        pdf_url: this.body[0]['pdf_url']
      }
    });
  }

  Save(form: NgForm){
    this.opacity = .5;
    let formData = new FormData();

    this.image_url = this.image_url ?? this.response.imagen_url;
    this.pdf_url = this.pdf_url ?? this.response.pdf_url;

    formData.append('titulo', form.form.controls['titulo']['value']);
    formData.append('descripcion', form.form.controls['descripcion']['value']);
    formData.append('pdf_url', this.pdf_url);
    formData.append('imagen_url', this.image_url);

    this._ApiUpdateBiografia.UPDATE('?id=1', formData).subscribe((data) => {
      this.code = true;
      this.opacity = 1;
      setTimeout(() => {
        this.code = false;
      }, 5000);
    });
  }

  onFileImgUrl(event:any): void {
    this.image_url = event.target.files[0];
  }

  onFilePDFUrl(event:any): void {
    this.pdf_url = event.target.files[0];
  }

}
