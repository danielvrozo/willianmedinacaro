import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AllVideoService } from 'src/app/apis/videos/all/all-video.service';

@Component({
  selector: 'app-crud-editar',
  templateUrl: './crud-editar.component.html',
  styleUrls: ['./crud-editar.component.css', '../../admin.styles.css']
})
export class CrudEditarComponent implements OnInit {

  show = false;
  id:any;
  body:any;
  response:any = {};
  code:any;
  image_url:any;
  opacity:any = 1;
  constructor(
    private _ApI: AllVideoService,
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
      this._ApI.ALL_GET('?id='+params['id']).subscribe((data) => {
        this.id = params['id'];
        this.show = true;
        this.body = data.body.content;

        this.response = {
          url_video: this.body[0]['url_video'],
          imagen_url: this.body[0]['imagen_url']
        }
      });
    });

  }

  Save(form: NgForm){
    this.opacity = .5;
    let formData = new FormData();

    this.image_url = this.image_url ?? this.response.imagen_url;

    formData.append('url_video', form.form.controls['url_video']['value']);
    formData.append('imagen_url', this.image_url);

    this._ApI.UPDATE('?id='+this.id, formData).subscribe((data) => {
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
