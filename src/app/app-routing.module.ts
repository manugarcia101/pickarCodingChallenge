import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'', redirectTo: '/change/direct', pathMatch: 'full'},
  { path:'change', loadChildren: () => import('./views/currencieChange/change.module').then(m => m.CurrencieChangeModule)},
  // { path:'**', redirectTo: '/indexes/index/Qli' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
