import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllGobiernoService } from 'src/app/apis/gobierno/all/all-gobierno.service';

@Component({
  selector: 'app-gobierno-delete',
  templateUrl: './gobierno-delete.component.html',
  styleUrls: ['./gobierno-delete.component.css', '../../../admin.styles.css']
})
export class GobiernoDeleteComponent implements OnInit {

  show = false;
  id:any;
  body:any;
  response:any = {};
  code:any;
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
          titulo: this.body[0]['titulo']
        }
      });
    });

  }

  Delete(){
    this.opacity = .5;
    this._ApiGobierno.DELETE('?delete='+this.id).subscribe((data) => {
      this.code = true;
      this.opacity = 1;
      setTimeout(() => {
        this.code = false;
      }, 5000);
    });
  }


}
