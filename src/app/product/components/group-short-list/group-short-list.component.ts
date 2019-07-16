import { Component, OnInit, Input } from '@angular/core';
import { GroupOrder } from '../../domain';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-group-short-list',
  templateUrl: './group-short-list.component.html',
  styleUrls: ['./group-short-list.component.css']
})
export class GroupShortListComponent implements OnInit {

  @Input() groupOrders: GroupOrder[] = [];
  @Input() row = 2;

  constructor() { }

  ngOnInit() {
    this.groupOrders = [
      {
        id: 1,
        productId: 2,
        startBy: 'Garen',
        avatar: 'assets/avatars/avatar001.png',
        startAt: new Date(),
        remainingNumber: 2
      },
      {
        id: 2,
        productId: 2,
        startBy: 'Lux',
        avatar: 'assets/avatars/avatar002.png',
        startAt: new Date(2019, 2, 20, 10, 10, 10),
        remainingNumber: 1
      }
    ]
  }

}
