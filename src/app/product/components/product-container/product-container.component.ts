import { Component, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { OrderService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductVariant } from '../../domain';
import { filter, map, switchMap } from 'rxjs/operators';
import { DialogService } from 'src/app/dialog';
import { ProductVariantDialogComponent } from '../product-variant-dialog';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {

  variants$: Observable<ProductVariant[]>;

  selectedIndex = 0;

  constructor(
    private service: OrderService,
    private route: ActivatedRoute,
    private dialogService: DialogService,
    private router: Router
  ) { }

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      filter(params => params.has('productId')),
      map(params => params.get('productId'))
    );
    this.variants$ = productId$.pipe(
      switchMap(productId => this.service.getProductVariantsByProductId(productId))
    );
  }

  handleDirectBuy(vairants: ProductVariant[]){

  }

  handleGroupBuy(variants: ProductVariant[]) {
    const top = 40;

    //Subject is an Observable and also an Observer
    //Subject can do .next() as an Observer, 
    // can also do .subscribe() as an Observable 
    // Behavior subjce is a special subject
    const formSubmitted = new EventEmitter();

    formSubmitted.subscribe( ev => {
      console.log(ev);
      this.dialogService.saveData(ev);
      this.router.navigate(['/orders/confirm'])
    });

    const selected = new EventEmitter();
    selected.subscribe( ev => {
      console.log(ev);
      this.selectedIndex = ev;
    });

    this.dialogService.open(ProductVariantDialogComponent, {
      // 如果 key 和 value 是一个名字，直接写就可以
      inputs: {
        variants: variants,
        selectedVariantIndex: this.selectedIndex
      },
      outputs: {
        formSubmitted,
        selected
      },
      position: {
        top: `${top}%`,
        left: '0%',
        width: '100%',
        height: `${100 - top}%`
      }
    });
  }

}
