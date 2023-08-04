import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InfoAllService } from 'src/app/apis/info/info-all.service';

@Component({
  selector: 'app-editar-info',
  templateUrl: './editar-info.component.html',
  styleUrls: ['./editar-info.component.css', '../../../admin.styles.css']
})
export class EditarInfoComponent implements OnInit {

  show = false;
  id:any;
  body:any;
  response:any = {};
  code:any;
  image_url:any;

  opacity:any = 1;
  constructor(
    private _Api: InfoAllService,
    private route: ActivatedRoute,
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarInfo();
  }

  MostrarInfo(){
    this.route.params.subscribe(params => {
      this._Api.GET().subscribe((data) => {
        this.id = params['id'];
        this.show = true;
        this.body = data.body.content;

        this.response = {
          celular: this.body[0]['celular'],
          correo: this.body[0]['correo'],
          ubicacion: this.body[0]['ubicacion'],
          mapa: this.body[0]['mapa'],
          frase: this.body[0]['frase'],
          logo: this.body[0]['logo'],
          frase_corta: this.body[0]['frase_corta'],
          titulo_gobienro: this.body[0]['titulo_gobienro'],
          titulo_noticias: this.body[0]['titulo_noticias']
        }
      });
    });

  }

  Save(form: NgForm){
    this.opacity = .5;

    let formData = new FormData();

    this.image_url = this.image_url ?? this.response.logo

    formData.append('celular', form.form.controls['celular']['value']);
    formData.append('correo', form.form.controls['correo']['value']);
    formData.append('ubicacion', form.form.controls['ubicacion']['value']);
    formData.append('mapa', form.form.controls['mapa']['value']);
    formData.append('frase', form.form.controls['frase']['value']);
    formData.append('frase_corta', form.form.controls['frase_corta']['value']);
    formData.append('titulo_gobienro', form.form.controls['titulo_gobienro']['value']);
    formData.append('titulo_noticias', form.form.controls['titulo_noticias']['value']);
    formData.append('imagen_url', this.image_url);

    this._Api.UPDATE(formData).subscribe((data) => {
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

}
