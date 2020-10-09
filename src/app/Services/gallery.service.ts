import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  GetPhotos() : Observable<Photo[]> {
    return this.http.get<Photo[]>("https://jsonplaceholder.typicode.com/photos");
   }
}
