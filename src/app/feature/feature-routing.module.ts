import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PropertyComponent } from './property/property.component';
import { SetComponent } from './set/set.component';
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
        redirectTo:"change-detection",
        pathMatch: 'full'
      },
      {
        path: 'change-detection',
        component: PropertyComponent,
      },
      {
        path: 'set',
        component: SetComponent,
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
