import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit, Renderer2, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { timeout } from 'q';

export interface ImageSlider {
  id: number;
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  @ViewChild('imageSlider') imgSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;

  
  len = 0;
  selectedIndex = 0;
  intervalId;


  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    //console.log('ngOnInit()', this.imgSlider);
    //this.imgSlider.nativeElement.innerHTML="<span>Hello</span>";
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //console.log('ngAfterViewInit()', this.imgs);
    //this.imgs.forEach(item => item.nativeElement.style.height='100px');
    //this.imgs.forEach(item => {
      //this.rd2.setStyle(item.nativeElement, 'height', '100px')
    //});
    
    //this.len = 5; //= this.sliders.length;
 
    if (this.intervalBySeconds <= 0) {
      return;
    }

    this.intervalId = 
      setInterval(() => {
        //const len = this.sliders.length;
        this.rd2.setProperty(
          this.imgSlider.nativeElement,
          'scrollLeft',
          (this.getIndex(++this.selectedIndex) * 
          this.imgSlider.nativeElement.scrollWidth / 
          this.sliders.length)
        );
      }, this.intervalBySeconds * 2000);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  getIndex(idx: number): number{
    //const len = this.sliders.length;
    return idx >= 0 ? idx % this.sliders.length : this.sliders.length - (Math.abs(idx) % this.len);
  }
  handleScroll(ev) {
    //const len = this.sliders.length;
    const ratio = ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);
  }

}
