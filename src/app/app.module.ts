import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventsComponent } from './components/art/events/events.component';
import { BillconfirmComponent } from './components/art/Shopping/billconfirm/billconfirm.component';
import { CheckoutComponent } from './components/art/Shopping/checkout/checkout.component';
import { ShoppingcartComponent } from './components/art/Shopping/shoppingcart/shoppingcart.component';
import { ShoppingComponent } from './components/art/shopping/shopping.component';
import { BulletinComponent } from './components/community/bulletin/bulletin.component';
import { VlogComponent } from './components/community/vlog/vlog.component';
import { PostbulletinComponent } from './components/community/bulletin/postbulletin/postbulletin.component';
import { MyvlogComponent } from './components/community/vlog/myvlog/myvlog.component';
import { MyvlogpreviewComponent } from './components/community/vlog/myvlogpreview/myvlogpreview.component';
import { CalendarComponent } from './components/resource/calendar/calendar.component';
import { CalendarpostComponent } from './components/resource/calendar/calendarpost/calendarpost.component';
import { ServicesComponent } from './components/resource/services/services.component';
import { ComponentsComponent } from './components/components.component';
import { UserComponent } from './components/user/user.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';

import { Routing } from './app.routing';
import { VloggerpagesComponent } from './components/community/vlog/vloggerpages/vloggerpages.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    BillconfirmComponent,
    CheckoutComponent,
    ShoppingcartComponent,
    ShoppingComponent,
    BulletinComponent,
    VlogComponent,
    PostbulletinComponent,
    MyvlogComponent,
    MyvlogpreviewComponent,
    CalendarComponent,
    CalendarpostComponent,
    ServicesComponent,
    ComponentsComponent,
    UserComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    VloggerpagesComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
