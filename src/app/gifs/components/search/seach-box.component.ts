import { GifService } from './../../services/gif.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {
  @ViewChild('tagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifService) { }

  ngOnInit() { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifService.searchTag(newTag);
    this.tagInput.nativeElement.value = "";
  }
}
