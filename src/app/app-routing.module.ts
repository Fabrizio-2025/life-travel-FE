import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './lifetravel/views/login.view/login.view.component';
import { HomeViewComponent } from './lifetravel/views/home.view/home.view.component';


const routes: Routes = [
  { path: "", component: LoginViewComponent },
  { path: "home", component:HomeViewComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
