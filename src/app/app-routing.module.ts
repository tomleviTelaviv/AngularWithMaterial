import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryResolvers } from './resolvers/gallery.resolvers';
import { PostsResolvers } from './resolvers/posts.resolvers';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { HomeComponent } from './views/home/home.component';
import { PostsComponent } from './views/posts/posts.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }, {
    path: 'home' ,
    component: HomeComponent,
    resolve: {
      posts: PostsResolvers,
      photos: GalleryResolvers
    }
  }, 
  {
    path: 'posts',  component: PostsComponent,
    resolve: {
      posts: PostsResolvers
    }
  },
  {
    path: 'gallery' , component: GalleryComponent ,
    resolve: {
      photos: GalleryResolvers
    }
  },
  {
    path: 'contact-us' , component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
