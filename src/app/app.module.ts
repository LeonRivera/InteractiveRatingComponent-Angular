import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { RatingFormComponent } from './rating/rating-form/rating-form.component';
import { RatingScoreComponent } from './rating/rating-score/rating-score.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    RatingFormComponent,
    RatingScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
