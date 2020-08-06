import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component'
import { PrincipalComponent } from './pages/principal/principal.component'
import { TodosLosProductosComponent } from './pages/todos-los-productos/todos-los-productos.component';
import { PinturasAnticorrosivasComponent } from './pages/pinturas-anticorrosivas/pinturas-anticorrosivas.component';
import { PinturasAutomotivasComponent } from './pages/pinturas-automotivas/pinturas-automotivas.component';
import { PinturasBaseAguaComponent } from './pages/pinturas-base-agua/pinturas-base-agua.component';
import { PinturasBaseSolventeComponent } from './pages/pinturas-base-solvente/pinturas-base-solvente.component';
import { PinturasImpermeabilizantesComponent } from './pages/pinturas-impermeabilizantes/pinturas-impermeabilizantes.component';
import { PinturasParaMaderaComponent } from './pages/pinturas-para-madera/pinturas-para-madera.component';
import { CatalogoAnticorrosivasComponent } from './pages/catalogo-anticorrosivas/catalogo-anticorrosivas.component';
import { CatalogoAutomotivasComponent } from './pages/catalogo-automotivas/catalogo-automotivas.component';
import { CatalogoImpermeabilizanteComponent } from './pages/catalogo-impermeabilizante/catalogo-impermeabilizante.component';
import { CatalogoMaderaComponent } from './pages/catalogo-madera/catalogo-madera.component';
import { CombosComponent } from './pages/combos/combos.component';
import { PinturasEnDescuentoComponent } from './pages/pinturas-en-descuento/pinturas-en-descuento.component';
import { FormRegistroComponent } from './pages/form-registro/form-registro.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { FormCompraProductosComponent } from './pages/form-compra-productos/form-compra-productos.component';

const routes: Routes = [
  { path: 'home', component: PrincipalComponent},
  { path: 'todos_los_productos', component: TodosLosProductosComponent},
  { path: 'pinturas_automotivas', component: PinturasAutomotivasComponent},
  { path: 'pinturas_anticorrosivas', component: PinturasAnticorrosivasComponent},
  { path: 'pinturas_base_agua', component: PinturasBaseAguaComponent},
  { path: 'pinturas_base_solvente', component: PinturasBaseSolventeComponent},
  { path: 'pinturas_impermeabilizante', component: PinturasImpermeabilizantesComponent},
  { path: 'pinturas_para_madera', component:PinturasParaMaderaComponent },
  { path: 'catalogo_anticorrosivas', component:CatalogoAnticorrosivasComponent },
  { path: 'catalogo_automotivas', component: CatalogoAutomotivasComponent},
  { path: 'catalogo_impermeabilizante', component: CatalogoImpermeabilizanteComponent},
  { path: 'catalogo_madera', component:CatalogoMaderaComponent },
  { path: 'combos', component:CombosComponent },
  { path: 'pinturas_en_promocion', component:PinturasEnDescuentoComponent },
  { path: 'formulario_registro', component:FormRegistroComponent },
  { path: 'formulario_inicio_sesion', component:InicioSesionComponent },
  { path: 'formulario_compra_productos', component:FormCompraProductosComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }, 
  { path: '**', pathMatch: 'full', redirectTo: 'home' }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
