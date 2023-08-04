import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AllGobiernoService } from 'src/app/apis/gobierno/all/all-gobierno.service';

@Component({
  selector: 'app-gobierno-update',
  templateUrl: './gobierno-update.component.html',
  styleUrls: ['./gobierno-update.component.css', '../../../admin.styles.css']
})
export class GobiernoUpdateComponent implements OnInit {

  show = false;
  id:any;
  body:any;
  response:any = {};
  code:any;
  image_url:any;
  pdf_url:any;
  opacity:any = 1;
  constructor(
    private _ApiGobierno: AllGobiernoService,
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
      this._ApiGobierno.ALL_GET_GOBIERNO('?id='+params['id']).subscribe((data) => {
        this.id = params['id'];
        this.show = true;
        this.body = data.body.content;

        this.response = {
          titulo: this.body[0]['titulo'],
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
    this.pdf_url = this.pdf_url ?? this.response.pdf_url;

    formData.append('titulo', form.form.controls['titulo']['value']);
    formData.append('descripcion', form.form.controls['descripcion']['value']);
    formData.append('pdf_url', this.pdf_url);
    formData.append('imagen_url', this.image_url);

    this._ApiGobierno.UPDATE('?id='+this.id, formData).subscribe((data) => {
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
