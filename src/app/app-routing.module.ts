import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { FeaturedComponent } from './pages/projects/featured/featured.component';
import { AllProjectsComponent } from './pages/projects/all-projects/all-projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  {
    path: 'pages',
    component: LayoutComponent,
    children: [
      { path: 'about', component: AboutMeComponent },
      { path: 'projects', component: ProjectsComponent, children: [
        {path: '', redirectTo: 'featured', pathMatch: 'full'},
        {path: 'featured', component: FeaturedComponent},
        {path: 'all-projects', component: AllProjectsComponent}
      ]},
      // { path: 'about', component: AboutMeComponent },
      { path: 'experience', component: ExperienceComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
