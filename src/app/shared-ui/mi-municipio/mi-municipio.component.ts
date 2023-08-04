import { Component, OnInit } from '@angular/core';
import { MeGetService } from 'src/app/apis/me/get/me-get.service';

@Component({
  selector: 'app-mi-municipio',
  templateUrl: './mi-municipio.component.html',
  styleUrls: ['./mi-municipio.component.css']
})
export class MiMunicipioComponent implements OnInit {

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
