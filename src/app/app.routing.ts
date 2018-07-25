import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { ComponentsComponent } from './components/components.component';
import { AppComponent } from './app.component';
import {AuthGuard} from './services/auth-guard.service';

// GUESTS
import { HomeComponent } from './components/homepage/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { UserPaygeComponent } from './components/user/userpayge.component';
// COMMUNITY
import { ShoutOutsComponent } from './components/community/shoutouts/shoutouts.component';
import { PostShoutOutComponent } from './components/community/shoutouts/postshoutout/postshoutout.component';
import { VlogLyfeComponent } from './components/community/vloglyfe/vloglyfe.component';
import { InspirationsComponent } from './components/community/vloglyfe/inspirations/inspirations.component';
import { PostVlogComponent } from './components/community/vloglyfe/postvlog/postvlog.component';
// ART
import { EventsComponent } from './components/art/events/events.component';
import { StoreComponent } from './components/art/store/store.component';
import { ShoppingCartComponent } from './components/art/store/shoppingcart/shoppingcart.component';
// RESOURCE
import { CalendarComponent } from './components/resource/calendar/calendar.component';
import { CalendarPostComponent } from './components/resource/calendar/calendarpost/calendarpost.component';
import { ServicesComponent } from './components/resource/services/services.component';
import { RequestBidComponent } from './components/resource/services/request-bid/request-bid.component';


// Import all other components here
const APP_ROUTES : Routes = [
  // GENERAL
  { path : '', component : HomeComponent},
  { path : 'home', component : HomeComponent},
  { path : 'about-us', component : AboutUsComponent},
  { path : 'login', component : LoginComponent},
  { path : 'register', component: RegisterComponent},
  // COMMUNITY
  { path : 'community/vloglyfe' , component: VlogLyfeComponent}, 
  { path : 'community/vloglyfe/inspirations' , component: InspirationsComponent},
  { path : 'community/shoutouts' , component: ShoutOutsComponent},
  // ART
  { path : 'art/events' , component: EventsComponent},
  { path : 'art/store' , component: StoreComponent},
  // RESOURCE
  { path : 'resource/calendar' , component: CalendarComponent},
  { path : 'resource/services' , component: ServicesComponent},
  { path : 'resource/services/request-bid' , component: RequestBidComponent},
  // USERS (place UID in later)
  { path : 'user' , component: ProfileComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/userpayge' , component: UserPaygeComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/community/vloglyfe/postvlog' , component: PostVlogComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/community/shoutout/post' , component: PostShoutOutComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/art/store/shoppingcart' , component: ShoppingCartComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/resource/calendarpost' , component: CalendarPostComponent, canActivate: [AuthGuard]}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
