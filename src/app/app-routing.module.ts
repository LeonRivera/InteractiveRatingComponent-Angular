import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingFormComponent } from './rating/rating-form/rating-form.component';
import { RatingScoreComponent } from './rating/rating-score/rating-score.component';

const routes: Routes = [
  {path: '', component: RatingFormComponent},
  {path: 'score', component: RatingScoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
