import { RoomDetailsComponent } from './room-details/room-details.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomListComponent } from './room-list/room-list.component';
import { UpdateRoomComponent } from './update-room/update-room.component';

const routes: Routes = [
  { path: '', redirectTo: 'salas', pathMatch: 'full' },
  { path: 'salas', component: RoomListComponent },
  { path: 'adcionar', component: CreateRoomComponent },
  { path: 'atualizar/:id', component: UpdateRoomComponent },
  { path: 'detalhar/:id', component: RoomDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
