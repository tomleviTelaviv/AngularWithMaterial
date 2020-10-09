import { FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/photo';
export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
  constructor() {
    super(50, 250, 500);
  }
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy}]
})
export class GalleryComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  selectedImage: any;
  photos : Photo[];
  @Input() size: number;
  
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    let listOfPhotos = this.activateRoute.snapshot.data.photos;
    
    if(this.size > 0)
    {
      listOfPhotos =   listOfPhotos.slice(0,this.size);
    }
  
    
    this.photos = listOfPhotos;
    this.selectedImage =  this.photos[0];
    
  }
  onImageClick(photo) {
    this.selectedImage = photo;
  }
}
