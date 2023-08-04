import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FlickrService } from 'src/app/apis/flickr/flickr.service';
import { GaleriaAllService } from 'src/app/apis/galeria/galeria-all.service';
import { FechaLetras } from 'src/app/class/fecha-letras';

@Component({
  selector: 'app-galeria-get',
  templateUrl: './galeria-get.component.html',
  styleUrls: ['./galeria-get.component.css']
})
export class GaleriaGetComponent implements OnInit {


  titulo:any;
  descripcion:any;
  hastag:any;
  link_original?: SafeResourceUrl;;
  fecha:any;
  album:any;
  constructor(
    public sanitizer: DomSanitizer,  
    private _ApiGetGaleria: GaleriaAllService,
    private _ApiflickrService: FlickrService,
    private _FechaLetras: FechaLetras,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarUnicaGaleria();
    
  }

  MostrarUnicaGaleria(){
    this.route.params.subscribe(params => {
      this._ApiGetGaleria.ALL('?id='+params['id']).subscribe((data) => {
        this.titulo = data.body.content[0].titulo;
        this.descripcion = data.body.content[0].descripcion;
        this.hastag = data.body.content[0].hastag;
        this.link_original = String(data.body.content[0].link_galeria);
        this.fecha = data.body.content[0].fecha;
        this.ObtenerAlbum(this.link_original);
      });
    });
  }

  ObtenerAlbum(id_album:any){
    this._ApiflickrService.getAlbum(id_album).subscribe((data: any) => {
      this.album = data.photoset;
    });
  }

  getPhotoUrl(photo: any): string {
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
  }

  getFechaLetas(fecha:any){
    return this._FechaLetras.transform(fecha);
  }

}
