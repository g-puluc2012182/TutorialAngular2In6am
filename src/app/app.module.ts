import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ROUTES
import { app_routing } from './app.routes';

//SERVICES
import { UsuarioService } from './services/usuario.service';
import { ContactoService } from './services/contacto.service';
import { CategoriaService } from './services/categoria.service';
import { TareaService } from './services/tarea.service';
import { HistorialService } from './services/historial.service';
import { AuthGuardService } from './services/auth-guard.service';

//COMPONENTES
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/dashboard/usuarios/usuarios.component';
import { ContactosComponent } from './components/dashboard/contactos/contactos.component';
import { ContactosFormComponent } from './components/dashboard/contactos/contactos-form.component';
import { CategoriasComponent } from './components/dashboard/categorias/categorias.component';
import { CategoriasFormComponent } from './components/dashboard/categorias/categorias-form.component';
import { TareasComponent } from './components/dashboard/tareas/tareas.component';
import { TareasFormComponent } from './components/dashboard/tareas/tareas-form.component';
import { HistorialesComponent } from './components/dashboard/historiales/historiales.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    ContactosComponent,
    CategoriasComponent,
    TareasComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent,
    ContactosFormComponent,
    CategoriasFormComponent,
    TareasFormComponent,
    HistorialesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    app_routing
  ],
  providers: [
    UsuarioService,
    ContactoService,
    CategoriaService,
    TareaService,
    HistorialService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
