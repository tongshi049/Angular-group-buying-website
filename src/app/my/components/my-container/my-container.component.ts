import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyService } from '../../services';
import { Observable } from 'rxjs';
import { Profile } from '../../domain';

@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MyContainerComponent implements OnInit {
  profile$: Observable<Profile>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MyService
  ) {}
  orderItems = [
    {
      title: 'Wait Payment',
      icon: '/assets/icons/to_pay.png'
    },
    {
      title: 'Shared',
      icon: '/assets/icons/to_share.png'
    },
    {
      title: 'Order in Process',
      icon: '/assets/icons/to_ship.png'
    },
    {
      title: 'On Delivery',
      icon: '/assets/icons/to_deliver.png'
    },
    {
      title: 'Review',
      icon: '/assets/icons/to_review.png'
    }
  ];
  toolsItems = [
    {
      title: 'Coupon',
      icon: '/assets/icons/coupon.png'
    },
    {
      title: 'Wishlists',
      icon: '/assets/icons/fav_product.png'
    },
    {
      title: 'Shop Collections',
      icon: '/assets/icons/fav_store.png'
    },
    {
      title: 'Order History',
      icon: '/assets/icons/history.png'
    },
    {
      title: 'Return & Refund',
      icon: '/assets/icons/refund.png'
    }
  ];

  ngOnInit() {
    this.profile$ = this.service.getProfile();
  }

  showProfile() {
    this.router.navigate(['profile'], { relativeTo: this.route });
  }
}