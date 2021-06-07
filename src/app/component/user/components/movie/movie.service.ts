import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private MOVIE_URL = environment.backend_url + '/movie';
  dialogData: any;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  save(event: any): Observable<any> {
    return this.http.post(this.MOVIE_URL, event, this.httpOptions);
  }

  update(data: any): Observable<any> {
    return this.http.put(this.MOVIE_URL, data, this.httpOptions);
  }

  getById(id: number): Observable<any> {
    return this.http.get(this.MOVIE_URL + '/' + id);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(this.MOVIE_URL + '/' + id);
  }

  getAll() {
    return this.http.get(this.MOVIE_URL + '/all');
  }

}
