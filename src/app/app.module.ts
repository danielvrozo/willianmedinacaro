import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/resources/header/header.component';
import { FooterComponent } from './modules/resources/footer/footer.component';
import { SliderComponent } from './shared-ui/slider/slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MiMunicipioComponent } from './shared-ui/mi-municipio/mi-municipio.component';
import { MensajeHrComponent } from './shared-ui/mensaje-hr/mensaje-hr.component';
import { ContactoUComponent } from './shared-ui/contacto-u/contacto-u.component';
import { NoticiasDestacadasComponent } from './shared-ui/noticias-destacadas/noticias-destacadas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { FechaLetras } from './class/fecha-letras';
import { HomeAdminComponent } from './modules/admin/home-admin/home-admin.component';
import { DecodeHtmlPipe } from './pipe/decode-html.pipe';
import { HeaderAdminComponent } from './modules/admin/resources/header-admin/header-admin.component';
import { SliderAdminComponent } from './modules/admin/slider-admin/slider-admin.component';
import { SliderCreateComponent } from './modules/admin/slider-admin/crud/slider-create/slider-create.component';
import { SliderDeleteComponent } from './modules/admin/slider-admin/crud/slider-delete/slider-delete.component';
import { SliderUpdateComponent } from './modules/admin/slider-admin/crud/slider-update/slider-update.component';
import { CrudMeComponent } from './modules/admin/home-admin/crud-me/crud-me.component';
import { NoticiasCreateComponent } from './modules/admin/noticias-admin/crud/noticias-create/noticias-create.component';
import { NoticiasDeleteComponent } from './modules/admin/noticias-admin/crud/noticias-delete/noticias-delete.component';
import { NoticiasUpdateComponent } from './modules/admin/noticias-admin/crud/noticias-update/noticias-update.component';
import { NoticiasAdminComponent } from './modules/admin/noticias-admin/noticias-admin.component';
import { ContactoAdminComponent } from './modules/admin/contacto-admin/contacto-admin.component';
import { NoticiasGetComponent } from './modules/noticias-get/noticias-get.component';
import { NoticiasComponent } from './modules/noticias/noticias.component';
import { ContactenosComponent } from './modules/contactenos/contactenos.component';
import { GaleriaAdminComponent } from './modules/admin/galeria-admin/galeria-admin.component';
import { GaleriaCreateComponent } from './modules/admin/galeria-admin/crud/galeria-create/galeria-create.component';
import { GaleriaDeleteComponent } from './modules/admin/galeria-admin/crud/galeria-delete/galeria-delete.component';
import { GaleriaUpdateComponent } from './modules/admin/galeria-admin/crud/galeria-update/galeria-update.component';
import { GaleriaGetComponent } from './modules/galeria-get/galeria-get.component';
import { BiografiaComponent } from './modules/biografia/biografia.component';
import { EditarBioComponent } from './modules/admin/biografia-admin/crud/editar-bio/editar-bio.component';
import { BiografiaAdminComponent } from './modules/admin/biografia-admin/biografia-admin.component';
import { GobiernoCreateComponent } from './modules/admin/gobierno-admin/crud/gobierno-create/gobierno-create.component';
import { GobiernoDeleteComponent } from './modules/admin/gobierno-admin/crud/gobierno-delete/gobierno-delete.component';
import { GobiernoUpdateComponent } from './modules/admin/gobierno-admin/crud/gobierno-update/gobierno-update.component';
import { GobiernoAdminComponent } from './modules/admin/gobierno-admin/gobierno-admin.component';
import { RedesCreateComponent } from './modules/admin/redes-admin/crud/redes-create/redes-create.component';
import { RedesDeleteComponent } from './modules/admin/redes-admin/crud/redes-delete/redes-delete.component';
import { RedesUpdateComponent } from './modules/admin/redes-admin/crud/redes-update/redes-update.component';
import { RedesAdminComponent } from './modules/admin/redes-admin/redes-admin.component';
import { LoginComponent } from './modules/admin/login/login.component';
import { RedirecLogin } from './class/redirect';
import { InformacionComponent } from './modules/admin/informacion/informacion.component';
import { EditarInfoComponent } from './modules/admin/informacion/crud/editar-info/editar-info.component';
import { HistoriaComponent } from './modules/historia/historia.component';
import { RedesSocialesComponent } from './shared-ui/redes-sociales/redes-sociales.component';
import { ProgramsGobiernoComponent } from './shared-ui/programs-gobierno/programs-gobierno.component';
import { GobiernoGetComponent } from './modules/gobierno-get/gobierno-get.component';
import { GobiernoComponent } from './modules/gobierno/gobierno.component';


@NgModule({
  declarations: [
    DecodeHtmlPipe,
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    MiMunicipioComponent,
    MensajeHrComponent,
    ContactoUComponent,
    NoticiasDestacadasComponent,

    HomeAdminComponent,
    HeaderAdminComponent,
    
    SliderAdminComponent,
    SliderCreateComponent,
    SliderDeleteComponent,
    SliderUpdateComponent,

    CrudMeComponent,

    NoticiasAdminComponent,
    NoticiasCreateComponent,
    NoticiasUpdateComponent,
    NoticiasDeleteComponent,

    ContactoAdminComponent,
    NoticiasGetComponent,
    NoticiasComponent,
    ContactenosComponent,

    GaleriaAdminComponent,
    GaleriaCreateComponent,
    GaleriaDeleteComponent,
    GaleriaUpdateComponent,
    GaleriaGetComponent,
    BiografiaComponent,

    BiografiaAdminComponent,
    EditarBioComponent,

    GobiernoAdminComponent,
    GobiernoCreateComponent,
    GobiernoUpdateComponent,
    GobiernoDeleteComponent,

    RedesAdminComponent,
    RedesCreateComponent,
    RedesUpdateComponent,
    RedesDeleteComponent,
    LoginComponent,
    InformacionComponent,
    EditarInfoComponent,
    HistoriaComponent,
    RedesSocialesComponent,

    ProgramsGobiernoComponent,
    GobiernoGetComponent,
    GobiernoComponent,
  ],
  imports: [
    BrowserModule,
    EditorModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot()
  ],
  providers: [FechaLetras, RedirecLogin, { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
