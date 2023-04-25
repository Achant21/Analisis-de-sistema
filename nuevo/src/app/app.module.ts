import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablainformacionComponent } from './components/tablainformacion/tablainformacion.component';
import { ModalproductonuevoComponent } from './components/modalproductonuevo/modalproductonuevo.component';
import { ModalconfirmacionComponent } from './components/modalconfirmacion/modalconfirmacion.component';
import { ModaleditarComponent } from './components/modaleditar/modaleditar.component';
import { ModaleliminarComponent } from './components/modaleliminar/modaleliminar.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TablainformacionComponent,
    ModalproductonuevoComponent,
    ModalconfirmacionComponent,
    ModaleditarComponent,
    ModaleliminarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
