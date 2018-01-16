import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from './cars/cars.component';
import { LayoutComponent } from './layout/layout.component';
import { CarFormComponent } from './car-form/car-form.component';





const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/cars',
        pathMatch: 'full'
    },
    { path:'cars', component: CarsComponent},
    { path:'add', component: CarFormComponent},

];
    



 @NgModule({
    imports: [
    RouterModule.forRoot(
            appRoutes
          )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
