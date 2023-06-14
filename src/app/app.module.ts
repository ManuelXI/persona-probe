import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TestPageComponent,
    ResultsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
