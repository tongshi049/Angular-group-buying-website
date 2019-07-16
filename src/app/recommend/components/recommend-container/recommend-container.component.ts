import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad, Product } from 'src/app/shared/domain';
import { switchMap, filter, map } from 'rxjs/operators';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { HomeService } from 'src/app/home/services';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendContainerComponent implements OnInit {

  ad$: Observable<Ad>;
  products$: Observable<Product[]>;

  constructor(
    private service: HomeService
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ad$ = this.service.getAdByTab('men').pipe(
      filter( ads => ads.length > 0),
      map(ads => ads[0])
    );
  
    this.products$ = this.service.getProductsByTab('men');
  }


  
}
