import { Component, OnInit } from '@angular/core';
import { AllGobiernoService } from 'src/app/apis/gobierno/all/all-gobierno.service';
import { InfoAllService } from 'src/app/apis/info/info-all.service';
import { FechaLetras } from 'src/app/class/fecha-letras';

@Component({
  selector: 'app-gobierno',
  templateUrl: './gobierno.component.html',
  styleUrls: ['./gobierno.component.css']
})
export class GobiernoComponent implements OnInit {

  gobierno:any;
  body_info:any;
  
  constructor(
    private _ApiALLGobierno: AllGobiernoService,
    private _FechaLetras: FechaLetras,
    private _ApiInfo: InfoAllService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarTodoGobierno();
    this.MostrarInfoContacto();
  }

  MostrarTodoGobierno(){
    this._ApiALLGobierno.ALL_GET_GOBIERNO('?id=ALL').subscribe((data) => {
      this.gobierno = data.body.content;
    });
  }

  MostrarInfoContacto(){
    this._ApiInfo.GET().subscribe( (data) => {
      this.body_info = data.body.content;
    } )
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
