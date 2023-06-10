
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginViewComponent } from './lifetravel/views/login.view/login.view.component';
import { SidenavComponent } from './lifetravel/components/sidenav/sidenav.component';
import { FormsModule} from '@angular/forms'

//Angular Material

//Prime NG
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { HomeViewComponent } from './lifetravel/views/home.view/home.view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    SidenavComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    TriStateCheckboxModule,
    PasswordModule,
    CheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
