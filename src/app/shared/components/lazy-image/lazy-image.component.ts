import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent {
  @Input()
  public url!: string;
  @Input()
  public alt: string = '';
  ngOnInit(): void {

    if (!this.url) throw new Error('Url property is required')
  }

  public hasLoaded: boolean = false;

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 500);
  }
}
