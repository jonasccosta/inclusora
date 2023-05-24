import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsPageComponent } from './results-page/results-page.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', data: { userEnteredText: '' }  },
  { path: 'result', component: ResultsPageComponent, data: { userEnteredText: '' }  },
  { path:'**', data: { userEnteredText: '' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
