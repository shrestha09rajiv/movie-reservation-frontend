import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingPaymentService {
  private BOOKING_URL = environment.backend_url + '/booking';
  dialogData: any;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getBookingInfo(bookingId: any) {
    return this.http.get(this.BOOKING_URL + '/pay/' + bookingId);
  }

  pay(data: any): Observable<any> {
    return this.http.post(this.BOOKING_URL + '/pay', data, this.httpOptions);
  }


}
