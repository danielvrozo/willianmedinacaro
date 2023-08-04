import { Component, OnInit } from '@angular/core';
import { AllGobiernoService } from 'src/app/apis/gobierno/all/all-gobierno.service';
import { InfoAllService } from 'src/app/apis/info/info-all.service';
import { FechaLetras } from 'src/app/class/fecha-letras';

@Component({
  selector: 'app-programs-gobierno',
  templateUrl: './programs-gobierno.component.html',
  styleUrls: ['./programs-gobierno.component.css']
})
export class ProgramsGobiernoComponent implements OnInit {

  gobierno:any;
  body_info:any;
  
  constructor(
    private _ApiAllPlan: AllGobiernoService,
    private _FechaLetras: FechaLetras,
    private _ApiInfo: InfoAllService
  ) { }

  ngOnInit(): void {
    this.mostrarPlanDeGobierno();
    this.MostrarInfoContacto();
  }

  MostrarInfoContacto(){
    this._ApiInfo.GET().subscribe( (data) => {
      this.body_info = data.body.content;
    } )
  }

  mostrarPlanDeGobierno(){
    this._ApiAllPlan.ALL_GET_GOBIERNO('?id=ALL').subscribe((data) => {
      this.gobierno = data.body.content;
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
