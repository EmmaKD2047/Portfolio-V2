import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { FeaturedComponent } from './pages/projects/featured/featured.component';
import { AllProjectsComponent } from './pages/projects/all-projects/all-projects.component';
import { BadgeComponent } from './components/badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    HomepageComponent,
    AboutMeComponent,
    LayoutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    FeaturedComponent,
    AllProjectsComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
