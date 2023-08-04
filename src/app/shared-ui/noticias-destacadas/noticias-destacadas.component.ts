import { Component, OnInit } from '@angular/core';
import { InfoAllService } from 'src/app/apis/info/info-all.service';
import { AllNoticiasService } from 'src/app/apis/noticias/all/all-noticias.service';
import { FechaLetras } from 'src/app/class/fecha-letras';

@Component({
  selector: 'app-noticias-destacadas',
  templateUrl: './noticias-destacadas.component.html',
  styleUrls: ['./noticias-destacadas.component.css']
})
export class NoticiasDestacadasComponent implements OnInit {

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
    this._ApiAllNoticias.ALL_GET_NOTICIAS('?id=ALL&items=4').subscribe((data) => {
      this.noticias = data.body.content;
    });
  }

  getFechaLetas(fecha:any){
    return this._FechaLetras.transform(fecha);
  }

  recortarDescripcion(descripcion: string, maxLength: number): string {
    const plainText = this.stripHtmlTags(descripcion);
    if (plainText.length <= maxLength) {
      return plainText;
    } else {
      return plainText.slice(0, maxLength) + '...';
    }
  }

  stripHtmlTags(html: string): string {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }

}
