import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'test', component: TestPageComponent },
  { path: 'results', component: ResultsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
