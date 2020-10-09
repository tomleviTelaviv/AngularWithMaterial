import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../models/post-general';
import { PostService } from '../Services/posts.service';

@Injectable({providedIn:'root'})
export class PostsResolvers implements Resolve<Post[]> {
    constructor(private postService: PostService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[] | Observable<any[]> | Promise<any[]> 
    {
        return this.postService.GetPosts();
    }

}