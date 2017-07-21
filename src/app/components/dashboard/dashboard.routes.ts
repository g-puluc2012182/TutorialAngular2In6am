import { Routes } from '@angular/router';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ContactosFormComponent } from './contactos/contactos-form.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriasFormComponent } from './categorias/categorias-form.component';
import { TareasComponent } from './tareas/tareas.component';
import { TareasFormComponent } from './tareas/tareas-form.component';
import { HistorialesComponent } from './historiales/historiales.component';

export const dashboard_routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'contacto/:idContacto', component: ContactosFormComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'categoria/:idCategoria', component: CategoriasFormComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'tarea/:idTarea', component: TareasFormComponent },
  { path: 'historiales', component: HistorialesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'usuario' }
];
