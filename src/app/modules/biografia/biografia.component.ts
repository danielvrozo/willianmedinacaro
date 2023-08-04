import { Component, OnInit } from '@angular/core';
import { BiografiaService } from 'src/app/apis/biografia/get/biografia.service';
import { FechaLetras } from 'src/app/class/fecha-letras';

@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.component.html',
  styleUrls: ['./biografia.component.css']
})
export class BiografiaComponent implements OnInit {

  titulo:any;
  imagen:any;
  pdf:any;
  descripcion:any;
  fecha:any;
  view:any;

  constructor(
    private _ApiBiografia: BiografiaService,
    private _FechaLetras: FechaLetras,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarBiografia();
  }

  MostrarBiografia(){
    this._ApiBiografia.ALL_GET('?id=1').subscribe((data) => {
      this.view = true;
      this.titulo = data.body.content[0].titulo;
      this.imagen = "https://willianmedina.com.co/willianmedina/uploads/"+data.body.content[0].imagen_url;
      this.pdf = "https://willianmedina.com.co/willianmedina/uploads/"+data.body.content[0].pdf_url;
      this.descripcion = data.body.content[0].descripcion;
      this.fecha = data.body.content[0].fecha;
    });
  }

  getFechaLetas(fecha:any){
    return this._FechaLetras.transform(fecha);
  }

}
