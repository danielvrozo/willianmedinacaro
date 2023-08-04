import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GaleriaAllService } from 'src/app/apis/galeria/galeria-all.service';

@Component({
  selector: 'app-galeria-update',
  templateUrl: './galeria-update.component.html',
  styleUrls: ['./galeria-update.component.css', '../../../admin.styles.css']
})
export class GaleriaUpdateComponent implements OnInit {

  show = false;
  id:any;
  body:any;
  response:any = {};
  code:any;

  opacity:any = 1;
  constructor(
    private _Api: GaleriaAllService,
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
      this._Api.ALL('?id='+params['id']).subscribe((data) => {
        this.id = params['id'];
        this.show = true;
        this.body = data.body.content;

        this.response = {
          titulo: this.body[0]['titulo'],
          descripcion: this.body[0]['descripcion'],
          hastag: this.body[0]['hastag'],
          link_galeria: this.body[0]['link_galeria']
        }
      });
    });

  }

  Save(form: NgForm){
    this.opacity = .5;
    let formData = new FormData();


    formData.append('titulo', form.form.controls['titulo']['value']);
    formData.append('descripcion', form.form.controls['descripcion']['value']);
    formData.append('hastag', form.form.controls['hastag']['value']);
    formData.append('link_galeria', form.form.controls['link_galeria']['value']);


    this._Api.UPDATE('?id='+this.id, formData).subscribe((data) => {
      this.code = true;
      this.opacity = 1;
      setTimeout(() => {
        this.code = false;
      }, 5000);
    });
  }

}
