import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowcameraPageRoutingModule } from './showcamera-routing.module';

import { ShowcameraPage } from './showcamera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowcameraPageRoutingModule
  ],
  declarations: [ShowcameraPage]
})
export class ShowcameraPageModule {}
