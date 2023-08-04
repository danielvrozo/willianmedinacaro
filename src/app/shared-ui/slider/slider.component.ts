import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { SliderAllService } from 'src/app/apis/slider/slider-all.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  slider:any;

  carouselConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  screen_desktop:any;
  screen_mobile:any; 

  constructor(
    private _ApiAll: SliderAllService,
    public breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    this.MostrarSlider();
    this.screenResolution();
  }

  MostrarSlider(){
    this._ApiAll.ALL('?id=ALL').subscribe((data) => {
      this.slider = data.body.content;
    });
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

}
