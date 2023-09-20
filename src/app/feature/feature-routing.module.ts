import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PropertyComponent } from './property/property.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'main', pathMatch: 'full',

  },
  {
    path:'main', component: MainPageComponent,
    children: [{
      path: '', component: PropertyComponent
    }]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
