import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SliderAllService } from 'src/app/apis/slider/slider-all.service';

@Component({
  selector: 'app-noticias-update',
  templateUrl: './slider-update.component.html',
  styleUrls: ['./slider-update.component.css', '../../../admin.styles.css']
})
export class SliderUpdateComponent implements OnInit {

  show = false;
  s_Mostrar: any;
  orden:any;
  id:any;
  body:any;
  response:any = {};
  code:any;
  image_url:any;
  opacity:any = 1;
  constructor(
    private _Api: SliderAllService,
    private route: ActivatedRoute,
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarInfo();
  }

  onOptionChange(event: any) {
    const selectedValue = event.target.value;
    this.s_Mostrar = selectedValue;
  }

  MostrarInfo(){
    this.route.params.subscribe(params => {
      this._Api.ALL('?id='+params['id']).subscribe((data) => {
        this.id = params['id'];
        this.show = true;
        this.body = data.body.content;

        this.response = {
          mostrar: this.body[0]['mostrar'],
          orden: this.body[0]['orden'],
          titulo: this.body[0]['titulo'],
          botonTitulo: this.body[0]['botonTitulo'],
          link_url: this.body[0]['link_url'],
          descripcion: this.body[0]['descripcion'],
          imagen_url: this.body[0]['imagen_url'],
          pdf_url: this.body[0]['pdf_url']
        }
      });
    });

  }

  Save(form: NgForm){
    this.opacity = .5;
    let formData = new FormData();

    this.image_url = this.image_url ?? this.response.imagen_url;

    if(this.s_Mostrar == undefined){
      this.s_Mostrar = 'Si';
    }

    formData.append('mostrar', this.s_Mostrar);
    formData.append('orden', form.form.controls['orden']['value']);
    formData.append('titulo', form.form.controls['titulo']['value']);
    formData.append('botonTitulo', form.value.botonTitulo);
    formData.append('link_url', form.value.link_url);
    formData.append('descripcion', form.form.controls['descripcion']['value']);
    formData.append('imagen_url', this.image_url);

    this._Api.UPDATE('?id='+this.id, formData).subscribe((data) => {
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
