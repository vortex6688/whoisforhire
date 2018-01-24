import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployerComponent } from './employer/employer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProcessComponent } from './process/process.component';
import { JobsComponent } from './jobs/jobs.component';
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { AboutComponent } from "./about/about.component";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth-guard.service";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home',
    component: HomeComponent
  },
  { path: 'process',
    component: ProcessComponent
  },
  { path: 'jobs',
    component: JobsComponent
  },
  { path: 'about',
    component: AboutComponent
  },
  { path: 'employer',
    component: EmployerComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'signup',
    component: SignupComponent
  }
];

export const firebaseConfig = {
  apiKey: "AIzaSyCRvtEFZnaRQKM-JEFKXj_iiFNf59pIG5g",
  authDomain: "whoisforhire-fa153.firebaseapp.com",
  databaseURL: "https://whoisforhire-fa153.firebaseio.com",
  projectId: "whoisforhire-fa153",
  storageBucket: "whoisforhire-fa153.appspot.com",
  messagingSenderId: "357166513248"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProcessComponent,
    JobsComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    EmployerComponent
  ],
  entryComponents: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
