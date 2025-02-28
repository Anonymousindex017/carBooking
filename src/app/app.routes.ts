import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookingComponent } from './components/booking/booking.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'layout',
        component: LayoutComponent,
        children: [
           { 
            path: 'dashboard',
            component:DashboardComponent
        },

            {
               path: 'customer',    
                component:CustomerComponent
            },

                { 
                    path: 'vehicle',
                    component:VehiclesComponent
                },

                    { 
                        path: 'booking',
                        component:BookingComponent
                    },
         ]

    }
];
