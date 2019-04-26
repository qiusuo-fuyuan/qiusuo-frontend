import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedMaterialModule} from '../material-modules'
import { UserlistComponent } from '../components/userlist/userlist.component';
import { AuthGuard } from '../guards/auth.guard';

const chatRoutes: Routes = [
  { path: 'rooms',component: RoomlistComponent},
  { path: 'rooms/:room_id',component: RoomComponent, canActivate: [AuthGuard]},
]
@NgModule({
  declarations: [
    RoomComponent,
    RoomlistComponent,
    UserlistComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(chatRoutes),
  ]
})
export class ChatModule { }
