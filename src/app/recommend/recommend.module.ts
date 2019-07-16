import { NgModule } from '@angular/core';

import { RecommendRoutingModule } from './recommend-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RecommendContainerComponent } from './components';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    RecommendContainerComponent
  ],
  imports: [
    SharedModule,
    RecommendRoutingModule
  ]
})
export class RecommendModule {

}
