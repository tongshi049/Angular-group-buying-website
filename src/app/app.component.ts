import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { TabItem } from './shared/domain';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { DialogService } from './dialog';
// interface AddFunc {
//   (x: number, y: number): number;
// }

// interface Dict {
//   [key: string]: string
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  selectedIndex$: Observable<number>

  // data$: Observable<any>;

  handleTabSelect(tab: TabItem) {
    this.router.navigate([tab.link]);
  }

  constructor(private router: Router, private dialogService: DialogService){}  

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.selectedIndex$ = this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd),
      map( (ev: NavigationEnd) => {
        const arr = ev.url.split('/');
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map(path => this.getSelectedIndex(path))
    );

    // this.data$ = this.dialogService.getData();
  }

  getSelectedIndex(tab: string) {
    return tab === 'recommend' 
    ? 1 
    : tab === 'category' 
    ? 2 
    : tab === 'chat' 
    ? 3 
    : tab === 'my' 
    ? 4 
    : 0;
  }

  removeDialog() {
    this.dialogService.close();
  }

}
