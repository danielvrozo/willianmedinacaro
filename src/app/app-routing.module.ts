import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { HomeAdminComponent } from './modules/admin/home-admin/home-admin.component';
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
import { GaleriaCreateComponent } from './modules/admin/galeria-admin/crud/galeria-create/galeria-create.component';
import { GaleriaDeleteComponent } from './modules/admin/galeria-admin/crud/galeria-delete/galeria-delete.component';
import { GaleriaUpdateComponent } from './modules/admin/galeria-admin/crud/galeria-update/galeria-update.component';
import { GaleriaAdminComponent } from './modules/admin/galeria-admin/galeria-admin.component';
import { GaleriaGetComponent } from './modules/galeria-get/galeria-get.component';
import { BiografiaComponent } from './modules/biografia/biografia.component';
import { BiografiaAdminComponent } from './modules/admin/biografia-admin/biografia-admin.component';
import { EditarBioComponent } from './modules/admin/biografia-admin/crud/editar-bio/editar-bio.component';
import { GobiernoCreateComponent } from './modules/admin/gobierno-admin/crud/gobierno-create/gobierno-create.component';
import { GobiernoDeleteComponent } from './modules/admin/gobierno-admin/crud/gobierno-delete/gobierno-delete.component';
import { GobiernoUpdateComponent } from './modules/admin/gobierno-admin/crud/gobierno-update/gobierno-update.component';
import { GobiernoAdminComponent } from './modules/admin/gobierno-admin/gobierno-admin.component';
import { RedesCreateComponent } from './modules/admin/redes-admin/crud/redes-create/redes-create.component';
import { RedesDeleteComponent } from './modules/admin/redes-admin/crud/redes-delete/redes-delete.component';
import { RedesUpdateComponent } from './modules/admin/redes-admin/crud/redes-update/redes-update.component';
import { RedesAdminComponent } from './modules/admin/redes-admin/redes-admin.component';
import { LoginComponent } from './modules/admin/login/login.component';
import { EditarInfoComponent } from './modules/admin/informacion/crud/editar-info/editar-info.component';
import { InformacionComponent } from './modules/admin/informacion/informacion.component';
import { HistoriaComponent } from './modules/historia/historia.component';
import { GobiernoGetComponent } from './modules/gobierno-get/gobierno-get.component';
import { GobiernoComponent } from './modules/gobierno/gobierno.component';
import { BienestarAnimalComponent } from './modules/bienestar-animal/bienestar-animal.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'noticias/noticia/:id', component: NoticiasGetComponent },
  { path: 'gobiernos', component: GobiernoComponent },
  { path: 'gobiernos/gobierno/:id', component: GobiernoGetComponent },
  { path: 'galeria/:id', component: GaleriaGetComponent },
  { path: 'contactenos', component:ContactenosComponent },
  { path: 'galeria/:id', component: GaleriaGetComponent },
  { path: 'mi-historia', component: BiografiaComponent },
  { path: 'historia', component:HistoriaComponent },
  { path: 'bienestar-animal', component:BienestarAnimalComponent },
  /* Admin */
  { path: 'admin/login', component: LoginComponent },

  { path: 'admin/info', component: InformacionComponent },
  { path: 'admin/info/editar', component: EditarInfoComponent },

  { path: 'admin/home', component: HomeAdminComponent },
  { path: 'admin/slider', component: SliderAdminComponent },
  { path: 'admin/slider/crear', component: SliderCreateComponent},
  { path: 'admin/slider/editar/:id', component: SliderUpdateComponent},
  { path: 'admin/slider/eliimnar/:id', component: SliderDeleteComponent},

  { path: 'admin/home/me/editar', component: CrudMeComponent },

  { path: 'admin/noticias', component: NoticiasAdminComponent},
  { path: 'admin/noticias/crear', component: NoticiasCreateComponent},
  { path: 'admin/noticias/editar/:id', component: NoticiasUpdateComponent},
  { path: 'admin/noticias/eliimnar/:id', component: NoticiasDeleteComponent},

  { path: 'admin/contacto', component: ContactoAdminComponent},

  { path: 'admin/galeria', component: GaleriaAdminComponent},
  { path: 'admin/galeria/crear', component: GaleriaCreateComponent},
  { path: 'admin/galeria/editar/:id', component: GaleriaUpdateComponent},
  { path: 'admin/galeria/eliimnar/:id', component: GaleriaDeleteComponent},

  { path: 'admin/quiensoy', component: BiografiaAdminComponent },
  { path: 'admin/quiensoy/editar', component: EditarBioComponent },

  { path: 'admin/gobierno', component: GobiernoAdminComponent},
  { path: 'admin/gobierno/crear', component: GobiernoCreateComponent},
  { path: 'admin/gobierno/editar/:id', component: GobiernoUpdateComponent},
  { path: 'admin/gobierno/eliimnar/:id', component: GobiernoDeleteComponent},

  { path: 'admin/redes', component: RedesAdminComponent},
  { path: 'admin/redes/crear', component: RedesCreateComponent},
  { path: 'admin/redes/editar/:id', component: RedesUpdateComponent},
  { path: 'admin/redes/eliimnar/:id', component: RedesDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
