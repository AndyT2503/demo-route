import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { ChildAComponent } from './components/home/child/child-a/child-a.component';
import { ChildBComponent } from './components/home/child/child-b/child-b.component';
import { FeatureModule } from './modules/feature/feature.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
