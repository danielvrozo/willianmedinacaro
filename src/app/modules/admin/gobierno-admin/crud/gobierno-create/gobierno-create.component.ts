import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllGobiernoService } from 'src/app/apis/gobierno/all/all-gobierno.service';

@Component({
  selector: 'app-gobierno-create',
  templateUrl: './gobierno-create.component.html',
  styleUrls: ['./gobierno-create.component.css', '../../../admin.styles.css']
})
export class GobiernoCreateComponent implements OnInit {

  code:any;
  titulo:any;
  descripcion:any;
  image_url:any;
  pdf_url:any;
  opacity:any = 1;
  constructor(
    private _ApiGobierno: AllGobiernoService,
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
    formData.append('pdf_url', this.pdf_url);
    formData.append('imagen_url', this.image_url);


    this._ApiGobierno.CREATE(formData).subscribe((data) => {
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
