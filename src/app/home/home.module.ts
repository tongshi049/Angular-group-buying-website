import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent, HomeDetailComponent } from './components';
import { HomeService, token } from './services';

@NgModule({
  declarations: [
    HomeContainerComponent, 
    HomeDetailComponent
  ],
  providers: [
    HomeService,
    { provide: token, useValue: 'http://localhost' }
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
