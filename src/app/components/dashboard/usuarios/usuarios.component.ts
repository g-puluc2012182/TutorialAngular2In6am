import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  constructor(
    private usuarioService:UsuarioService,
    private router:Router
  ) { }

  ngOnInit() {

  }

  salir() {
    localStorage.removeItem('token');
    this.router.navigate(["/login"]);
  }

}
