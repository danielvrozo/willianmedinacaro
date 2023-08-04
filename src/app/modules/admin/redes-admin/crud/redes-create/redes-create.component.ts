import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RedesAllService } from 'src/app/apis/redes/redes-all.service';

@Component({
  selector: 'app-redes-create',
  templateUrl: './redes-create.component.html',
  styleUrls: ['./redes-create.component.css', '../../../admin.styles.css']
})
export class RedesCreateComponent implements OnInit {
  orden:any;
  code:any;
  nombre:any;
  link:any;
  opacity:any = 1;
  constructor(
    private _Api: RedesAllService,
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
  }

  Save(form: NgForm){
    this.opacity = .5;
    let formData = new FormData();

    formData.append('orden', form.value.orden);
    formData.append('nombre', form.value.nombre);
    formData.append('link', form.value.link);

    this._Api.CREATE(formData).subscribe((data) => {
      this.code = true;
      this.opacity = 1;
      setTimeout(() => {
        this.code = false;
      }, 5000);
    });
  }

}
