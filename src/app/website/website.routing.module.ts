import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ServiceComponent } from "./service/service.component";

export const websiteRoutes: Routes = [
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'service', component: ServiceComponent
    },
    {
        path: '**', component: HomeComponent
    },
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(websiteRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class WebsiteRoutingModule { }