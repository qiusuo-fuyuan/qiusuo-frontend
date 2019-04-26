import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/search/room.search.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  room: Room;

  constructor(private roomService: RoomService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.roomService.getRoom(params['room_id'])
        .subscribe(room => {
          this.room = room;
          console.log(this.room)
        });
    });
  }
}
