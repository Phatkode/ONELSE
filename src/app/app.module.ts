import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from './app.routing';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { AuthGuard } from './services/auth-guard.service';

// GUESTS
import { HomeComponent } from './components/homepage/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
// COMMUNITY
import { VlogLyfeComponent } from './components/community/vloglyfe/vloglyfe.component';
import { InspirationsComponent } from './components/community/vloglyfe/inspirations/inspirations.component';
import { ShoutOutsComponent } from './components/community/shoutouts/shoutouts.component';
// ART
import { EventsComponent } from './components/art/events/events.component';
import { StoreComponent } from './components/art/store/store.component';
// RESOURCE
import { CalendarComponent } from './components/resource/calendar/calendar.component';
import { ServicesComponent } from './components/resource/services/services.component';
import { RequestBidComponent } from './components/resource/services/request-bid/request-bid.component'
// USER PAGES
import { UserPaygeComponent } from './components/user/userpayge.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { PostVlogComponent } from './components/community/vloglyfe/postvlog/postvlog.component';
import { PostShoutOutComponent } from './components/community/shoutouts/postshoutout/postshoutout.component';
import { ShoppingCartComponent } from './components/art/store/shoppingcart/shoppingcart.component';
import { CalendarPostComponent } from './components/resource/calendar/calendarpost/calendarpost.component';
// CLIENT SERVICES
import { ShoutOutService } from './services/shoutout.service.client';
import { UserService } from './services/user.service.client'
import { CalPostService } from './services/calendarpost.service.client';
import { SharedService } from './services/shared.service.client';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
// GUEST
    HomeComponent,
    AboutUsComponent,
    RegisterComponent,
    LoginComponent,
// COMMUNITY
    VlogLyfeComponent,
    InspirationsComponent,
    ShoutOutsComponent,
// ART
    EventsComponent,
    StoreComponent,
// RESOURCE
    CalendarComponent,
    ServicesComponent,
    RequestBidComponent,
// USER
    UserPaygeComponent,    
    ProfileComponent,
    PostVlogComponent,
    PostShoutOutComponent,    
    ShoppingCartComponent,
    CalendarPostComponent,

  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule,

  ],
  providers: [UserService, 
              ShoutOutService, 
              CalPostService,
              SharedService,
              AuthGuard
              ],
  bootstrap: [AppComponent]

})
export class AppModule { }
