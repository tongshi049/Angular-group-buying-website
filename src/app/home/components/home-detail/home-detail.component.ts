import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Ad, Product } from 'src/app/shared/domain';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit, OnDestroy {

  imageSliders$: Observable<ImageSlider[]>;

  channels$: Observable<Channel[]>;  

  selectedTabLink$: Observable<string>

  ad$: Observable<Ad>;

  products$: Observable<Product[]>;

  sub = Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.selectedTabLink$ = this.route.paramMap
      .pipe(
        filter(params => params.has('tabLink')),
        map(params => params.get('tabLink'))
      )
      // .subscribe(
      //   tabLink => {
      //   // this.selsectedTabLink = params.get('tabLink');
      //   this.selsectedTabLink = tabLink;
      //   this.cd.markForCheck();
      // });
    
    // this.sub = this.route.queryParamMap.subscribe( params => {
    //   console.log(params)
    // });

    this.imageSliders$ = this.service.getBanners()
      // .subscribe(
      //   banner => { 
      //     this.imageSliders = banner; 
      //     this.cd.markForCheck();
      //   }
      // );
    this.channels$ = this.service.getChannels()
      // .subscribe(
      //   channels => { 
      //     this.channels = channels; 
      //     this.cd.markForCheck();
      //   }
      // );
    this.ad$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getAdByTab(tab)),
      filter( ads => ads.length > 0),
      map(ads => ads[0])
    );

    this.products$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getProductsByTab(tab))
    );
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
  

}
