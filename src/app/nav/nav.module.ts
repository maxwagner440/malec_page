import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        NavBarComponent
    ],
    declarations: [
        NavBarComponent
    ],
    providers: [  ]
  })

  export class NavModule { }