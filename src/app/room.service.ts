import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  url: string = `${environment.URL_SERVIDOR}`;

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  createRoom(room: Object): Observable<Object> {
    return this.http.post(`${this.url}`, room);
  }

  updateRoom(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, value);
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  getRoomsList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
