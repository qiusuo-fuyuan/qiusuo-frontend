import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Room } from '../models/room';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RoomService extends RestService {

  getRoom(id: string): Observable<Room> {
    let requestPath = '/room/'+id;
    return this.query<Room>(requestPath);
  }

  searchRooms(searchText: string): Observable<Array<Room>> {
    let requestPath = '/search/room/?search='+searchText;
    return this.query<Array<Room>>(requestPath);
  }
}
