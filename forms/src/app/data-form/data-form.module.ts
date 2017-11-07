import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { DataFormComponent } from './data-form.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ DataFormComponent]
})
export class DataFormModule { }
