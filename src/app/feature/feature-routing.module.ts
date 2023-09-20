import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PropertyComponent } from './property/property.component';
import { UpdateComponent } from './update/update.component';
import { MutateComponent } from './mutate/mutate.component';
import { EffectComponent } from './effect/effect.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: '',
        redirectTo:"set",
        pathMatch: 'full'
      },
      {
        path: 'set',
        component: PropertyComponent,
      },
      {
        path: 'update',
        component: UpdateComponent,
      },
      {
        path: 'mutate',
        component: MutateComponent,
      },
      {
        path: 'effect',
        component: EffectComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
