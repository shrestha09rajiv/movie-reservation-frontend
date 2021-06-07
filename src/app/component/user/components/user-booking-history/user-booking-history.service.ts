import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserBookingHistoryService {
  private BOOKING_URL = environment.backend_url + '/booking';
  dialogData: any;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  save(event: any): Observable<any> {
    return this.http.post(this.BOOKING_URL, event, this.httpOptions);
  }

  update(data: any): Observable<any> {
    return this.http.put(this.BOOKING_URL, data, this.httpOptions);
  }

  getById(id: number): Observable<any> {
    return this.http.get(this.BOOKING_URL + '/' + id);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(this.BOOKING_URL + '/' + id);
  }

  getAll() {
    return this.http.get(this.BOOKING_URL + '/all');
  }

  getAvailableBooking() {
    return this.http.get(this.BOOKING_URL + '/available');
  }

  getTicketInfo(movieId: any) {
    return this.http.get(this.BOOKING_URL + '/ticket/info/' + movieId);
  }
}
