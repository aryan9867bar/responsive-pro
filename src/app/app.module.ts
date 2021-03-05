import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
// import { CollapseModule } from 'ngx-bootstrap/collapse';





import { router } from "./routing";
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(router),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    // NgxNavbarModule,
    // CollapseModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
