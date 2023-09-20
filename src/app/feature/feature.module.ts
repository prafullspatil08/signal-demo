import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { MaterialModule } from '../material/material.module';
import { MainPageComponent } from './main-page/main-page.component';
import { PropertyComponent } from './property/property.component';
import { NormalPropertyComponent } from './normal-property/normal-property.component';
import { ReactivePropertyComponent } from './reactive-property/reactive-property.component';
import { UpdateComponent } from './update/update.component';
import { MutateComponent } from './mutate/mutate.component';
import { EffectComponent } from './effect/effect.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    MainPageComponent,
    PropertyComponent,
    NormalPropertyComponent,
    ReactivePropertyComponent,
    UpdateComponent,
    MutateComponent,
    EffectComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FeatureModule { }
