import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookingComponent } from './components/booking/booking.component';

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
        path: '',
        component: LayoutComponent,
        children: [
           { path: 'dashboard',
            component:DashboardComponent},

            { path: 'customer',
                component:CustomerComponent},

                { path: 'vehicle',
                    component:VehicleComponent},

                    { path: 'booking',
                        component:BookingComponent},
         ]

    }
];
