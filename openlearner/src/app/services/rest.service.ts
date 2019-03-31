import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

export abstract class RestService {
  base: string = 'http://127.0.0.1:8000/zh-hans'; 

  constructor(@Inject(HttpClient)private http:HttpClient) { }
  
  query<T>(requestPath:string) {
    return this.http.get<T>(this.base + requestPath);
  }
}
