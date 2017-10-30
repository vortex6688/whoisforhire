import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProcessComponent } from './process/process.component';
import { EmployerComponent } from './employer/employer.component';
import { JobsComponent } from './jobs/jobs.component';
import { SignupComponent } from "./employer/signup/signup.component";
import { AboutComponent } from "./about/about.component";
import { AuthService } from "./auth/auth.service";

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
  { path: 'employer',
    component: EmployerComponent
  },
  { path: 'jobs',
    component: JobsComponent
  },
  { path: 'about',
    component: AboutComponent
  }
];

const firebaseConfig = {
  apiKey: "AIzaSyA3DGmf3NxyBtFp4A_BwLyn3YzoBVYwcg8",
  authDomain: "whoisforhire.firebaseapp.com",
  databaseURL: "https://whoisforhire.firebaseio.com",
  projectId: "whoisforhire",
  storageBucket: "whoisforhire.appspot.com",
  messagingSenderId: "228861063727"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProcessComponent,
    EmployerComponent,
    JobsComponent,
    SignupComponent,
    AboutComponent
  ],
  entryComponents: [
    SignupComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 

 }
