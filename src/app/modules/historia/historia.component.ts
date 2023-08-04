import { Component, OnInit } from '@angular/core';
import { MeGetService } from 'src/app/apis/me/get/me-get.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  me_short:any;
  show = false;
  show_me = false;
  
  constructor(

    private _ApiGetMeShort: MeGetService,
  ) { }

  ngOnInit(): void {
    this.ObtenerInfoCorta();
  }


  ObtenerInfoCorta(){
    this._ApiGetMeShort.GET_SHORT('?id=1').subscribe((data) => {
      this.show_me = true;
      this.me_short = data.body.content;
    });
  }

}
