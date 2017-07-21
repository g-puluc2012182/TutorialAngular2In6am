import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CategoriaService {
  constructor(
    private http:Http
  ) {  }

  public getCategorias() {
    let uri = "http://localhost:3000/api/v1/categoria/";
    let headers = new Headers({
      'Authorization': localStorage.getItem('token')
    });

    let options = new RequestOptions({ headers: headers});
    return this.http.get(uri, options)
    .map(res => res.json());
  }

  public getCategoria(idCategoria:number) {
    let uri = "http://localhost:3000/api/v1/categoria/" + idCategoria;
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

  public nuevoCategoria(categoria:any) {
    let uri = "http://localhost:3000/api/v1/categoria/";
    let data = JSON.stringify(categoria);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });

    return this.http.post(uri, data, { headers })
    .map(res => {
      return res.json();
    });
  }

  public editarCategoria(categoria:any, idCategoria:any) {
    let uri = "http://localhost:3000/api/v1/categoria/" + idCategoria;
    let data = JSON.stringify(categoria);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });

    return this.http.put(uri, data, { headers })
    .map(res => {
      return res.json();
    });
  }

  public eliminarCategoria(idCategoria:any) {
    let uri = "http://localhost:3000/api/v1/categoria/" + idCategoria;
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