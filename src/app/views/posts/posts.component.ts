import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post-general';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() size: number;
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];

  posts: MatTableDataSource<Post[]>;
  listOfPosts : any;
  constructor(private activateRoute: ActivatedRoute) 
  {

  }

  ngOnInit(): void {
   
    
    let listOfPosts = this.activateRoute.snapshot.data.posts;
    if(this.size > 0)
    {
      listOfPosts =   listOfPosts.slice(0,this.size);
    }

    this.posts = new MatTableDataSource(listOfPosts);
    


  }

}
