import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GaleriaAllService } from 'src/app/apis/galeria/galeria-all.service';

@Component({
  selector: 'app-galeria-create',
  templateUrl: './galeria-create.component.html',
  styleUrls: ['./galeria-create.component.css', '../../../admin.styles.css']
})
export class GaleriaCreateComponent implements OnInit {

  code:any;
  titulo:any;
  descripcion:any;
  hastag:any;
  link_galeria:any;
  opacity:any = 1;
  constructor(
    private _Api: GaleriaAllService,
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
  }

  Save(form: NgForm){
    this.opacity = .5;
    let formData = new FormData();

    formData.append('titulo', form.value.titulo);
    formData.append('descripcion', form.value.descripcion);
    formData.append('hastag', form.value.hastag);
    formData.append('link_galeria', form.value.link_galeria);


    this._Api.CREATE(formData).subscribe((data) => {
      this.code = true;
      this.opacity = 1;
      setTimeout(() => {
        this.code = false;
      }, 5000);
    });
  }

}
