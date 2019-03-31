import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService extends RestService{
  resource: string = '/categories/';

  getRootCategories():Category[] {
    return null;
  }
}
