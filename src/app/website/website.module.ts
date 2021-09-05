import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ServiceComponent } from "./service/service.component";
import { WebsiteRoutingModule } from "./website.routing.module";



@NgModule({
    imports: [
      CommonModule,
      WebsiteRoutingModule,
    ],
    declarations: [
      HomeComponent,
      AboutComponent,
      ContactComponent,
      ServiceComponent,
    ],
    providers: [  ]
  })

  export class WebsiteModule { }