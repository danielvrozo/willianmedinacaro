import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllGobiernoService } from 'src/app/apis/gobierno/all/all-gobierno.service';
import { AllNoticiasService } from 'src/app/apis/noticias/all/all-noticias.service';
import { FechaLetras } from 'src/app/class/fecha-letras';

@Component({
  selector: 'app-gobierno-get',
  templateUrl: './gobierno-get.component.html',
  styleUrls: ['./gobierno-get.component.css']
})
export class GobiernoGetComponent implements OnInit {

  noticia:any;
  titulo:any;
  imagen:any;
  pdf:any;
  descripcion:any;
  fecha:any;
  url_original:any;
  ultimas_noticias:any;
  constructor(
    private _ApiAllGobierno: AllGobiernoService,
    private _ApiAllNoticias: AllNoticiasService,
    private _FechaLetras: FechaLetras,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MotrasUnicaNoticia();
    this.UltimasNoticias();
  }

  MotrasUnicaNoticia(){
    this.route.params.subscribe(params => {
      this._ApiAllGobierno.ALL_GET_GOBIERNO('?id='+params['id']).subscribe((data) => {
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

  UltimasNoticias(){
    this._ApiAllNoticias.ALL_GET_NOTICIAS('?id=ALL&items=3').subscribe((data) => {
      this.ultimas_noticias = data.body.content;
    });
  }

  getFechaLetas(fecha:any){
    return this._FechaLetras.transform(fecha);
  }

  

}
