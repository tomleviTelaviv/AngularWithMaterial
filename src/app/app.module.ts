import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { GalleryComponent } from './views/gallery/gallery.component';
import { HomeComponent } from './views/home/home.component';
import { PostsResolvers } from './resolvers/posts.resolvers';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { PostsComponent } from './views/posts/posts.component';
import { GalleryResolvers } from './resolvers/gallery.resolvers';
import { ContactUsComponent } from './views/contact-us/contact-us.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    SidebarComponent,
    ContactUsComponent,
    MainComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    PostsResolvers,
    GalleryResolvers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
