import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService} from 'src/app/services/room.service'
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss']
})
export class RoomlistComponent implements OnInit {
  searchInputControl = new  FormControl();
  roomSearchResults: Observable<Room[]>;
  activatedRoom: Room;
  
  constructor(private roomService: RoomService) { }

  ngOnInit() {
      this.searchInputControl.valueChanges
        .subscribe(value => {
        if(value.length >= 2){
           this.roomSearchResults = this.roomService.searchRooms(value);
           console.log(this.roomSearchResults)
          }
      });
    }
}
