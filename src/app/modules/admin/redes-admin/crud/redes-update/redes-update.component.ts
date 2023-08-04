import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RedesAllService } from 'src/app/apis/redes/redes-all.service';

@Component({
  selector: 'app-redes-update',
  templateUrl: './redes-update.component.html',
  styleUrls: ['./redes-update.component.css', '../../../admin.styles.css']
})
export class RedesUpdateComponent implements OnInit {

  show = false;
  id:any;
  body:any;
  response:any = {};
  code:any;

  opacity:any = 1;
  constructor(
    private _Api: RedesAllService,
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
          nombre: this.body[0]['nombre'],
          orden: this.body[0]['orden'],
          link: this.body[0]['link']
        }
      });
    });

  }

  Save(form: NgForm){
    this.opacity = .5;
    let formData = new FormData();


    formData.append('nombre', form.form.controls['nombre']['value']);
    formData.append('orden', form.form.controls['orden']['value']);
    formData.append('link', form.form.controls['link']['value']);


    this._Api.UPDATE('?id='+this.id, formData).subscribe((data) => {
      this.code = true;
      this.opacity = 1;
      setTimeout(() => {
        this.code = false;
      }, 5000);
    });
  }

}
