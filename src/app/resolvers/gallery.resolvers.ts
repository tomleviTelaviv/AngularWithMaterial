import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../models/post-general';
import { GalleryService } from '../Services/gallery.service';

@Injectable({providedIn:'root'})
export class GalleryResolvers implements Resolve<Post[]> {
    constructor(private galleryService: GalleryService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[] | Observable<any[]> | Promise<any[]> 
    {
        return this.galleryService.GetPhotos();
    }

}