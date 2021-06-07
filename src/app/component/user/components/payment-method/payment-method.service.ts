import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  private PAYMENT_METHOD_URL = environment.backend_url + '/payment';
  dialogData: any;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  save(event: any): Observable<any> {
    return this.http.post(this.PAYMENT_METHOD_URL, event, this.httpOptions);
  }

  update(data: any): Observable<any> {
    return this.http.put(this.PAYMENT_METHOD_URL, data, this.httpOptions);
  }

  getById(id: number): Observable<any> {
    return this.http.get(this.PAYMENT_METHOD_URL + '/' + id);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(this.PAYMENT_METHOD_URL + '/' + id);
  }

  getAll() {
    return this.http.get(this.PAYMENT_METHOD_URL + '/all');
  }
}
