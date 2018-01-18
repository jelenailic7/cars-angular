import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { LayoutComponent } from './layout/layout.component';
import { CarService } from './service/car.service';
import { CarFormComponent } from './cars/car-form/car-form.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';






@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    LayoutComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule
    


  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
