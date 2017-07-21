import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../../../services/historial.service';

@Component({
  selector: 'app-historiales',
  templateUrl: './historiales.component.html',
  styles: []
})
export class HistorialesComponent implements OnInit {

  historiales:any[] = [];

  constructor(
    private historialService:HistorialService
  ) { }

  public inicializar() {
    this.historialService.getHistoriales().subscribe(data => {
      this.historiales = data;
    });
  }

  ngOnInit() {
    this.inicializar();
  }

  borrarHistorial(idHistorial:any) {
    this.historialService.eliminarHistorial(idHistorial)
    .subscribe(res => {
      if(res.estado) {
        this.inicializar();
      }
    });
  }
}