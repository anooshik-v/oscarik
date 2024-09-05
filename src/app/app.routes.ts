import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { FunFactsComponent } from './fun-facts/fun-facts.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'skills', component:SkillsComponent},
{path:'portfolio', component:PortfolioComponent},
{path:'testimonials', component:TestimonialsComponent},
{path:'work-experience', component:WorkExperienceComponent},
{path:'fun-facts', component:FunFactsComponent},
{path:'**', component: NotFoundComponent}
];
