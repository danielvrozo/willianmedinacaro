import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactoAllService } from 'src/app/apis/contacto/contacto-all.service';
import { InfoAllService } from 'src/app/apis/info/info-all.service';

@Component({
  selector: 'app-contacto-u',
  templateUrl: './contacto-u.component.html',
  styleUrls: ['./contacto-u.component.css']
})
export class ContactoUComponent implements OnInit {

  code:any;
  error:any;

  nombre:any;
  correo:any;
  celular:any;
  mensaje:any;
  
  opacity:any = 1;
  body_info:any;
  
  constructor(
    private _Api: ContactoAllService,
    private _ApiInfo: InfoAllService
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarInfoContacto();
  }

  Save(form: NgForm){
    if(form.invalid){
      this.error = true;
        this.opacity = 1;
        setTimeout(() => {
          this.error = false;
        }, 5000);
    } else {
      this.opacity = .5;
      let formData = new FormData();

      formData.append('nombre', form.value.nombre);
      formData.append('correo', form.value.correo);
      formData.append('celular', form.value.celular);
      formData.append('mensaje', form.value.mensaje);

      this._Api.CREATE(formData).subscribe((data) => {
        this.code = true;
        this.opacity = 1;
        setTimeout(() => {
          this.code = false;
        }, 5000);
      });
    }
  }

  MostrarInfoContacto(){
    this._ApiInfo.GET().subscribe( (data) => {
      this.body_info = data.body.content;
    } )
  }

}
