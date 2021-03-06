import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent, CountDownComponent, FooterComponent, VerticalGridComponent, ProductCardComponent, ProductTileComponent, BackButtonComponent } from './components';
import { GridItemDirective, TagDirective, AvatarDirective } from './directives';
import { GridItemImageDirective } from './directives/grid-item-image.directive';
import { GridItemTitleDirective } from './directives/grid-item-title.directive';
import { AgoPipe } from './pipes';
import { DialogModule } from '../dialog';

@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe
  ]
})
export class SharedModule { }
