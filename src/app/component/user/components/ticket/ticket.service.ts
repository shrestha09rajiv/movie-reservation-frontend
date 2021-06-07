import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private TICKET_URL = environment.backend_url + '/ticket';
  dialogData: any;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.TICKET_URL + '/movieTickets');
  }

  getAvailableTickets() {
    return this.http.get(this.TICKET_URL + '/available');
  }
}
