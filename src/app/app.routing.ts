import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AppComponent } from './app.component';
import { EventsComponent } from './components/art/events/events.component';
import { BillconfirmComponent } from './components/art/shopping/billconfirm/billconfirm.component';
import { CheckoutComponent } from './components/art/shopping/checkout/checkout.component';
import { ShoppingcartComponent } from './components/art/shopping/shoppingcart/shoppingcart.component';
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
import { VloggerpagesComponent } from './components/community/vlog/vloggerpages/vloggerpages.component';



// Import all other components here 

const APP_ROUTES : Routes = [
  { path : '', component : LoginComponent},
  { path : 'login', component : LoginComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'profile' , component: ProfileComponent},
  { path : 'community/vlog' , component: VlogComponent},
  { path : 'community/vloggerpages' , component: VloggerpagesComponent},
  { path : 'community/bulletin' , component: BulletinComponent},
  { path : 'user/:uid/:vid/community/myvlog' , component: MyvlogComponent},
  { path : 'user/:uid/:vid/community/myvlog/preview' , component: MyvlogpreviewComponent},
  { path : 'user/:uid/:bid/community/bulletin/post' , component: PostbulletinComponent},
  { path : 'art/events' , component: EventsComponent},
  { path : 'art/shopping' , component: ShoppingComponent},
  { path : 'user/:cid/art/shopping' , component: ShoppingcartComponent},
  { path : 'user/:cid/art/checkout' , component: CheckoutComponent},
  { path : 'user/:cid/art/billconfirm' , component: BillconfirmComponent},
  { path : 'resource/calendar' , component: CalendarComponent},
  { path : 'resource/services' , component: ServicesComponent},
  { path : 'user/:uid/resource/calendarpost' , component: CalendarpostComponent}

];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
