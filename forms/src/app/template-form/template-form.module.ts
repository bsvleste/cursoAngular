import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from './../form-debug/form-debug.component';
import { CommonModule } from '@angular/common';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports:      [ CommonModule,FormsModule ],
    declarations: [ TemplateFormComponent,FormDebugComponent ],
    bootstrap:    []
})
export class TemplateFormModule {  }