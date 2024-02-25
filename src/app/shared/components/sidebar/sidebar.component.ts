import { GifService } from './../../../gifs/services/gif.service';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private gifsServices: GifService) { }

  get tags(): string[] {
    return this.gifsServices.tagsHistory;
  }

  searchTag(tag: string) {
    this.gifsServices.searchTag(tag);
  }
}
