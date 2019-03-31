import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  base: 'ws://127.0.0.1:8000/ws/chat/';
  constructor() { }
}
