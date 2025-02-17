import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UdpComponent } from '../pages/udp/udp.component';
import { DataGenComponent } from '../pages/data-gen/data-gen.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'udp', component: UdpComponent },
  { path: 'data_gen', component: DataGenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
