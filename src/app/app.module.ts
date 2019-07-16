import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule, ParamInterceptor, NotificationInterceptor } from './home';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RecommendModule } from './recommend';
import { MyModule } from './my';
import { ChatModule } from './chat';
import { CategoryModule } from './category';
import { ProductModule } from './product';
// import localZh from '@angular/common/locales/zh-Hans';
// import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    SharedModule, 
    AppRoutingModule,
    HomeModule, 
    HttpClientModule,
    RecommendModule, 
    MyModule,
    ChatModule,
    CategoryModule,
    ProductModule
  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'zh-Hans'
    // }
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ParamInterceptor,
        multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor() {
  //   registerLocaleData(localZh, 'zh');
  // }
}
