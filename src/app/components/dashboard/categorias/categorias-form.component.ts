import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-categorias-form',
  templateUrl: 'categorias-form.component.html',
})
export class CategoriasFormComponent implements OnInit {
  formularioCategoria:FormGroup;
  uri:string;
  categoria:any;
  notificacion:any = {
    estado: false,
    mensaje: ""
  }

  constructor(
    private categoriaService:CategoriaService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    let validaciones = [
      Validators.required, Validators.minLength(3)
    ];

    this.activatedRoute.params.subscribe(params => {
      this.uri = params["idCategoria"];
      if(this.uri !== "nuevo") {
        this.categoriaService.getCategoria(params["idCategoria"])
        .subscribe(categoria => {
          this.categoria = categoria;
          this.formularioCategoria = new FormGroup({
            'nombreCategoria': new FormControl(this.categoria.nombreCategoria, validaciones),
          });
        });
      } else {
        this.formularioCategoria = new FormGroup({
          'nombreCategoria': new FormControl('', validaciones),
        });
      }
    });
  }

  ngOnInit() {
  }

  public guardarCambios() {
    if(this.uri === "nuevo") {
      console.log("Nueva Categoria");
      console.log(this.formularioCategoria.value);
      this.categoriaService.nuevoCategoria(this.formularioCategoria.value)
      .subscribe(res => {
        if(res.estado) {
        this.notificacion.estado = res.estado;
        this.notificacion.mensaje = res.mensaje;
        this.formularioCategoria.reset();

        setTimeout(() => {
          this.router.navigate(['/dashboard/categorias']);
        }, 5000);
      }
      });
    } else {
      console.log("Modificacion de categoria");
      this.categoriaService.editarCategoria(this.formularioCategoria.value, this.uri)
      .subscribe(res => {
        if(res.estado) {
          this.notificacion.mensaje = res.mensaje;
          this.notificacion.estado = res.estado;
          this.formularioCategoria.reset();
          setTimeout(() => {
            this.router.navigate(['/dashboard/categorias']);
          }, 3000);
        }
      });
    }
  }
}