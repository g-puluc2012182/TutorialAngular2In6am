import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TareaService {
  constructor(
    private http:Http
  ) {  }

  public getTareas() {
    let uri = "http://localhost:3000/api/v1/tarea/";
    let headers = new Headers({
      'Authorization': localStorage.getItem('token')
    });

    let options = new RequestOptions({ headers: headers});
    return this.http.get(uri, options)
    .map(res => res.json());
  }

  public getTarea(idTarea:number) {
    let uri = "http://localhost:3000/api/v1/tarea/" + idTarea;
    let headers = new Headers({
      'Authorization': localStorage.getItem('token')
    });

    let options = new RequestOptions({ headers: headers});
    return this.http.get(uri, options)
    .map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  public nuevoTarea(tarea:any) {
    let uri = "http://localhost:3000/api/v1/tarea/";
    let data = JSON.stringify(tarea);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });

    return this.http.post(uri, data, { headers })
    .map(res => {
      return res.json();
    });
  }

  public editarTarea(tarea:any, idTarea:any) {
    let uri = "http://localhost:3000/api/v1/tarea/" + idTarea;
    let data = JSON.stringify(tarea);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });

    return this.http.put(uri, data, { headers })
    .map(res => {
      return res.json();
    });
  }

  public eliminarTarea(idTarea:any) {
    let uri = "http://localhost:3000/api/v1/tarea/" + idTarea;
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });
    let options = new RequestOptions({headers: headers});
    return this.http.delete(uri, options)
    .map(res => {
      return res.json();
    });
  }
}