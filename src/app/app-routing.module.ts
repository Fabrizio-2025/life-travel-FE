import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './lifetravel/views/login.view/login.view.component';
import { HomeViewComponent } from './lifetravel/views/home.view/home.view.component';
import { PlanesViewComponent } from './lifetravel/views/planes.view/planes.view.component';


const routes: Routes = [
  { path: "", component: LoginViewComponent },
  { path: "home", component: HomeViewComponent },
  { path: "planes", component: PlanesViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
