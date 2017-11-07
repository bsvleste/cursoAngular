import { SharedModule } from './../shared/shared.module';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


@NgModule({
    imports:      [ CommonModule,FormsModule,HttpModule,SharedModule ],
    declarations: [TemplateFormComponent],
    bootstrap:    []
})
export class TemplateFormModule {  }