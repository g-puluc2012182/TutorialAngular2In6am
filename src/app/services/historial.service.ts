import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HistorialService {
  constructor(
    private http:Http
  ) {  }

  public getHistoriales() {
    let uri = "http://localhost:3000/api/v1/historial/";
    let headers = new Headers({
      'Authorization': localStorage.getItem('token')
    });

    let options = new RequestOptions({ headers: headers});
    return this.http.get(uri, options)
    .map(res => res.json());
  }

  public getHistorial(idHistorial:number) {
    let uri = "http://localhost:3000/api/v1/historial/" + idHistorial;
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


  public eliminarHistorial(idHistorial:any) {
    let uri = "http://localhost:3000/api/v1/historial/" + idHistorial;
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