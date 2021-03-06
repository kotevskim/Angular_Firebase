import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {UserManagementService} from './services/user-management.service';
import {PostManagementService} from './services/post-management.service';
import {BidManagementService} from './services/bid-management.service';

import { BiddingComponent } from './bidding/bidding.component';
import { CoreModule } from './auth/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { PostCreateComponent } from './post-create/post-create.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyDfvIAalAR57zx_EJA-ZtU8AsvaAL7yuGE',
  authDomain: 'test2-6c973.firebaseapp.com',
  databaseURL: 'https://test2-6c973.firebaseio.com',
  projectId: 'test2-6c973',
  storageBucket: '',
  messagingSenderId: '1058372434454'
};

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailsComponent,
    LoginComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    BiddingComponent,
    UserProfileComponent,
    CountdownTimerComponent,
    PostCreateComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserManagementService,
    BidManagementService,
    PostManagementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
