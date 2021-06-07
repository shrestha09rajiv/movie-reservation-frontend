import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private BOOKING_URL = environment.backend_url + '/booking/dashboard/data';
  dialogData: any;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getDashboardData(): Observable<any> {
    return this.http.get(this.BOOKING_URL);
  }
}
