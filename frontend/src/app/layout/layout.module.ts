import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class LayoutModule { }
