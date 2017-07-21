import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TareaService } from '../../../services/tarea.service';

@Component({
  selector: 'app-tareas-form',
  templateUrl: 'tareas-form.component.html',
})
export class TareasFormComponent implements OnInit {
  formularioTarea:FormGroup;
  uri:string;
  tarea:any;
  notificacion:any = {
    estado: false,
    mensaje: ""
  }

  constructor(
    private tareaService:TareaService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    let validaciones = [
      Validators.required, Validators.minLength(3)
    ];

    this.activatedRoute.params.subscribe(params => {
      this.uri = params["idTarea"];
      if(this.uri !== "nuevo") {
        this.tareaService.getTarea(params["idTarea"])
        .subscribe(tarea => {
          this.tarea = tarea;
          this.formularioTarea = new FormGroup({
            'titulo': new FormControl(this.tarea.Titulo, validaciones),
            'descripcion': new FormControl(this.tarea.Descripcion, validaciones),
            'fechaInicio': new FormControl(this.tarea.FechaInicio, validaciones),
            'fechaFinal': new FormControl(this.tarea.FechaFinal, validaciones),
            'estado': new FormControl(this.tarea.Estado,  validaciones),
          });
        });
      } else {
        this.formularioTarea = new FormGroup({
          'titulo': new FormControl('', validaciones),
          'descripcion': new FormControl('', validaciones),
          'fechaInicio': new FormControl('', validaciones),
          'fechaFinal': new FormControl('', validaciones),
          'estado': new FormControl('', validaciones)
        });
      }
    });
  }

  ngOnInit() {
  }

  public guardarCambios() {
    if(this.uri === "nuevo") {
      console.log("Nueva Tarea");
      console.log(this.formularioTarea.value);
      this.tareaService.nuevoTarea(this.formularioTarea.value)
      .subscribe(res => {
        if(res.estado) {
          this.notificacion.mensaje = res.mensaje;
          this.notificacion.estado = res.estado;
          setTimeout(() => {
            this.router.navigate(['/dashboard/tareas']);
          }, 5000);
        }
      });
    } else {
      console.log("Modificacion de tarea");
      this.tareaService.editarTarea(this.formularioTarea.value, this.uri)
      .subscribe(res => {
        if(res.estado) {
          this.notificacion.mensaje = res.mensaje;
          this.notificacion.estado = res.estado;
          this.formularioTarea.reset();
          setTimeout(() => {
            this.router.navigate(['/dashboard/tareas']);
          }, 3000);
        }
      });
    }
  }
}