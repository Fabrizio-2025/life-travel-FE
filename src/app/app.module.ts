
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
import { ProductService } from './lifetravel/services/productService';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { HotelCardComponent } from './lifetravel/components/hotel-card/hotel-card.component';
import { CalendarModule } from 'primeng/calendar';
import { PlanesViewComponent } from './lifetravel/views/planes.view/planes.view.component';
import { PlanCardComponent } from './lifetravel/components/plan-card/plan-card.component';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    SidenavComponent,
    HomeViewComponent,
    HotelCardComponent,
    PlanesViewComponent,
    PlanCardComponent
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
    CheckboxModule,
    DataViewModule,
    TagModule,
    RatingModule,
    CalendarModule,
    ToastModule,
    TableModule,
    DialogModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
