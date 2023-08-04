import { Component, OnInit } from '@angular/core';
import { InfoAllService } from 'src/app/apis/info/info-all.service';
import { AllNoticiasService } from 'src/app/apis/noticias/all/all-noticias.service';
import { FechaLetras } from 'src/app/class/fecha-letras';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias:any;
  body_info:any;
  
  constructor(
    private _ApiAllNoticias: AllNoticiasService,
    private _FechaLetras: FechaLetras,
    private _ApiInfo: InfoAllService
  ) { }

  ngOnInit(): void {
    this.mostrarUltimasNoticias();
    this.MostrarInfoContacto();
  }

  MostrarInfoContacto(){
    this._ApiInfo.GET().subscribe( (data) => {
      this.body_info = data.body.content;
    } )
  }

  mostrarUltimasNoticias(){
    this._ApiAllNoticias.ALL_GET_NOTICIAS('?id=ALL').subscribe((data) => {
      this.noticias = data.body.content;
    });
  }

  getFechaLetas(fecha:any){
    return this._FechaLetras.transform(fecha);
  }
}
