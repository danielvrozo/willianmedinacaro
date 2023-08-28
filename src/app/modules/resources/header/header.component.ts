import { Component, OnInit } from '@angular/core';
import {  BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import { GaleriaAllService } from 'src/app/apis/galeria/galeria-all.service';
import { RedesAllService } from 'src/app/apis/redes/redes-all.service';
import { InfoAllService } from 'src/app/apis/info/info-all.service';
import { AllGobiernoService } from 'src/app/apis/gobierno/all/all-gobierno.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  screen_desktop:any;
  screen_mobile:any; 

  apps = false;
  body:any;
  body_galeria:any;
  body_info:any;
  pdf:any;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private _ApiRedes: RedesAllService,
    private _ApiGaleria: GaleriaAllService,
    private _ApiInfo: InfoAllService,
    private _ApiAllPlan: AllGobiernoService,
  ) { }

  ngOnInit(): void {
    this.screenResolution();
    this.MostrarRedes();
    this.MostrarGalerias();
    this.MostrarInfoContacto();
    this.mostrarPlanDeGobierno();
  }

  /* Dependiendo la resolucion - desktop o mobile, cargara diferentes elementos */
  screenResolution(){
    /* Dependiendo de la vista responsive, cargará cierta div padre de la vista */
    this.breakpointObserver.observe(["(min-width: 770px)"]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        //Entonces si el width es superior a 767, será la versión Desktop mostrando su propio diseño
        this.screen_desktop = true;
        this.screen_mobile = false;
      } else {
        //Entonces si el width es inferio a 767, será la versión Mobile mostrando su propio diseño
        this.screen_desktop = false;
        this.screen_mobile = true;
      }
  });
  };

  mostrarPlanDeGobierno(){
    this._ApiAllPlan.ALL_GET_GOBIERNO('?id=ALL').subscribe((data) => {
      this.pdf = "https://willianmedina.com.co/willianmedina/uploads/"+data.body.content[0].pdf_url;
    });
  }

  MostrarRedes(){
    this._ApiRedes.ALL('?id=ALL').subscribe((data) => {
      this.body = data.body.content;
    });
  }

  MostrarGalerias(){
    this._ApiGaleria.ALL('?id=ALL').subscribe((data) => {
      this.body_galeria = data.body.content;
    });
  }

  MostrarInfoContacto(){
    this._ApiInfo.GET().subscribe( (data) => {
      this.body_info = data.body.content;
    } )
  }

}
