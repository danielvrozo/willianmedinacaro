import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllNoticiasService } from 'src/app/apis/noticias/all/all-noticias.service';

@Component({
  selector: 'app-noticias-delete',
  templateUrl: './noticias-delete.component.html',
  styleUrls: ['./noticias-delete.component.css', '../../../admin.styles.css']
})
export class NoticiasDeleteComponent implements OnInit {

  show = false;
  id:any;
  body:any;
  response:any = {};
  code:any;
  opacity:any = 1;
  constructor(
    private _Api: AllNoticiasService,
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
      this._Api.ALL_GET_NOTICIAS('?id='+params['id']).subscribe((data) => {
        this.id = params['id'];
        this.show = true;
        this.body = data.body.content;
        this.response = {
          titulo: this.body[0]['titulo']
        }
      });
    });

  }

  Delete(){
    this.opacity = .5;
    this._Api.DELETE('?delete='+this.id).subscribe((data) => {
      this.code = true;
      this.opacity = 1;
      setTimeout(() => {
        this.code = false;
      }, 5000);
    });
  }

}
