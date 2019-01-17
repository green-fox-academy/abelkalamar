import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityTabsComponent } from './city-tabs/city-tabs.component';
import { ForecastDetailedComponent } from './forecast-detailed/forecast-detailed.component';

const routes: Routes = [
  { path: 'cityView', component: CityTabsComponent },
  { path: 'detail/:id', component: ForecastDetailedComponent },
  { path: '', redirectTo: '/cityView', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
