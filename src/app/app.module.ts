import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosLosProductosComponent } from './pages/todos-los-productos/todos-los-productos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PinturasAnticorrosivasComponent } from './pages/pinturas-anticorrosivas/pinturas-anticorrosivas.component';
import { PinturasAutomotivasComponent } from './pages/pinturas-automotivas/pinturas-automotivas.component';
import { PinturasBaseAguaComponent } from './pages/pinturas-base-agua/pinturas-base-agua.component';
import { PinturasBaseSolventeComponent } from './pages/pinturas-base-solvente/pinturas-base-solvente.component';
import { PinturasImpermeabilizantesComponent } from './pages/pinturas-impermeabilizantes/pinturas-impermeabilizantes.component';
import { PinturasParaMaderaComponent } from './pages/pinturas-para-madera/pinturas-para-madera.component';
import { CatalogoImpermeabilizanteComponent } from './pages/catalogo-impermeabilizante/catalogo-impermeabilizante.component';
import { CatalogoAnticorrosivasComponent } from './pages/catalogo-anticorrosivas/catalogo-anticorrosivas.component';
import { CatalogoAutomotivasComponent } from './pages/catalogo-automotivas/catalogo-automotivas.component';
import { CatalogoMaderaComponent } from './pages/catalogo-madera/catalogo-madera.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CombosComponent } from './pages/combos/combos.component';
import { PinturasEnDescuentoComponent } from './pages/pinturas-en-descuento/pinturas-en-descuento.component';
import { FormRegistroComponent } from './pages/form-registro/form-registro.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { FormCompraProductosComponent } from './pages/form-compra-productos/form-compra-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosLosProductosComponent,
    ProductosComponent,
    NavbarComponent,
    PrincipalComponent,
    CarrouselComponent,
    PinturasAnticorrosivasComponent,
    PinturasAutomotivasComponent,
    PinturasBaseAguaComponent,
    PinturasBaseSolventeComponent,
    PinturasImpermeabilizantesComponent,
    PinturasParaMaderaComponent,
    CatalogoImpermeabilizanteComponent,
    CatalogoAnticorrosivasComponent,
    CatalogoAutomotivasComponent,
    CatalogoMaderaComponent,
    FooterComponent,
    CombosComponent,
    PinturasEnDescuentoComponent,
    FormRegistroComponent,
    InicioSesionComponent,
    FormCompraProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
