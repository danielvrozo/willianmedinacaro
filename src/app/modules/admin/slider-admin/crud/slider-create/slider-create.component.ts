import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SliderAllService } from 'src/app/apis/slider/slider-all.service';

@Component({
  selector: 'app-slider-create',
  templateUrl: './slider-create.component.html',
  styleUrls: ['./slider-create.component.css', '../../../admin.styles.css']
})
export class SliderCreateComponent implements OnInit {

  code:any;
  s_Mostrar: any;
  orden:any;
  titulo:any;
  descripcion:any;
  image_url:any;
  botonTitulo:any;
  link_url:any;
  opacity:any = 1;
  constructor(
    private _Api: SliderAllService,
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
  }

  onOptionChange(event: any) {
    const selectedValue = event.target.value;
    this.s_Mostrar = selectedValue;
  }

  Save(form: NgForm){
    this.opacity = .5;
    let formData = new FormData();

    if(this.s_Mostrar == undefined){
      this.s_Mostrar = 'Si';
    }

    formData.append('mostrar', this.s_Mostrar);
    formData.append('orden', form.value.orden);
    formData.append('titulo', form.value.titulo);
    formData.append('botonTitulo', form.value.botonTitulo);
    formData.append('link_url', form.value.link_url);
    formData.append('descripcion', form.value.descripcion);
    formData.append('imagen_url', this.image_url);


    this._Api.CREATE(formData).subscribe((data) => {
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
