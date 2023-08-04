import { Component, OnInit } from '@angular/core';
import { InfoAllService } from 'src/app/apis/info/info-all.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  body_info:any;
  constructor(
    private _ApiInfo: InfoAllService
  ) { }

  ngOnInit(): void {
    this.MostrarInfoContacto();
  }

  MostrarInfoContacto(){
    this._ApiInfo.GET().subscribe( (data) => {
      this.body_info = data.body.content;
    } )
  }

}
