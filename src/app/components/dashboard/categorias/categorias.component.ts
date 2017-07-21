import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styles: []
})
export class CategoriasComponent implements OnInit {

  categorias:any[] = [];

  constructor(
    private categoriaService:CategoriaService
  ) { }

  public inicializar() {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  ngOnInit() {
    this.inicializar();
  }

  borrarCategoria(idCategoria:any) {
    this.categoriaService.eliminarCategoria(idCategoria)
    .subscribe(res => {
      if(res.estado) {
        this.inicializar();
      }
    });
  }
}