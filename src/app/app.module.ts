import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkeletonComponent } from './layout/profesor/skeleton/skeleton.component';
import { HeaderComponent } from './layout/profesor/header/header.component';
import { SidebarComponent } from './layout/profesor/sidebar/sidebar.component';
import { FooterComponent } from './layout/profesor/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
  {
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
