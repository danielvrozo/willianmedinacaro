import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllNoticiasService } from 'src/app/apis/noticias/all/all-noticias.service';
import { FechaLetras } from 'src/app/class/fecha-letras';

@Component({
  selector: 'app-noticias-get',
  templateUrl: './noticias-get.component.html',
  styleUrls: ['./noticias-get.component.css']
})
export class NoticiasGetComponent implements OnInit {

  noticia:any;
  titulo:any;
  imagen:any;
  pdf:any;
  descripcion:any;
  fecha:any;
  url_original:any;
  ultimas_noticias:any;
  view:any; 
  constructor(
    private _ApiAllNoticias: AllNoticiasService,
    private _FechaLetras: FechaLetras,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MotrasUnicaNoticia();
  }

  MotrasUnicaNoticia(){
    this.route.params.subscribe(params => {
      this._ApiAllNoticias.ALL_GET_NOTICIAS('?id='+params['id']).subscribe((data) => {
        this.view = true;
        this.noticia = data.body.content;
        this.titulo = data.body.content[0].titulo;
        this.imagen = "https://willianmedina.com.co/willianmedina/uploads/"+data.body.content[0].imagen_url;
        this.pdf = "https://willianmedina.com.co/willianmedina/uploads/"+data.body.content[0].pdf_url;
        this.descripcion = data.body.content[0].descripcion;
        this.fecha = data.body.content[0].fecha;
        this.url_original = data.body.content[0].link_url;
      });
    });
  }

  getFechaLetas(fecha:any){
    return this._FechaLetras.transform(fecha);
  }

}
