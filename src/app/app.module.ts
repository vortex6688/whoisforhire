import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProcessComponent } from './process/process.component';
import { EmployerComponent } from './employer/employer.component';
import { JobsComponent } from './jobs/jobs.component';
import { SignupComponent } from "./employer/signup/signup.component";
import { AboutComponent } from "./about/about.component";

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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
