import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";

export const router:Routes = [
    {
        path:"dashboard",
        component:DashboardComponent,
        children:[
            {
                path:"about",
                component:AboutComponent
            },
            {
                path:"home",
                component:HomeComponent
            },
            {
                path:"contact",
                component:ContactComponent
            },
            // {
            //     path:"",
            //     redirectTo:"/dashboard",
            //     pathMatch:"full"
            // }
        ]
    },

    {
        path:"",
        redirectTo:"/dashboard/home",
        pathMatch:"full"
    }
]