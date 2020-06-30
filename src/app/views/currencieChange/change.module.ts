import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeInDirectComponent } from './change-in-direct/change-in-direct.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { ChangeRoutingModule } from './change-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    ChangeInDirectComponent,
    ChangeLogComponent,
  ],
  imports: [
    CommonModule,
    ChangeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CurrencieChangeModule { }
