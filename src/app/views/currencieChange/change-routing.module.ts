import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeInDirectComponent } from './change-in-direct/change-in-direct.component';
import { ChangeLogComponent } from './change-log/change-log.component';

const routes: Routes = [
  { path: 'direct', component: ChangeInDirectComponent },
  { path: 'log', component: ChangeLogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeRoutingModule { }