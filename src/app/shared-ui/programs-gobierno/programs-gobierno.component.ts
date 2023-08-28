import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  pdf:any;
  safeIframeUrl: any;
  
  constructor(
    private _ApiAllPlan: AllGobiernoService,
    private _FechaLetras: FechaLetras,
    private _ApiInfo: InfoAllService,
    public sanitizer: DomSanitizer,
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
      this.pdf = "https://willianmedina.com.co/willianmedina/uploads/"+data.body.content[0].pdf_url;

      setTimeout(() => {
        this.safeIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdf); // Añadimos el link al iframe siguiendo la estructuración de seguridad sugerida por Angular
      }, 500);
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
