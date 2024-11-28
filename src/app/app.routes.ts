import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeSkillsNationComponent } from './home-skills-nation/home-skills-nation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigupComponent } from './sigup/sigup.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { InventorComponent } from './inventor/inventor.component';
import { WoratechComponent } from './woratech/woratech.component';

export const routes: Routes = [
{path:"",component:HomeComponent},
{path:"about",component:AboutComponent},
{
    path:"contact",component:ContactusComponent
},{
    path:"home",component:HomeSkillsNationComponent
},{
    path:"login",component:LoginComponent
},
{
    path:"signup",component:SigupComponent
}
,{
    path:"whatdo",component:WhatWeDoComponent
},{
    path:"whowe",component:WhoWeAreComponent
},{
    path:"inventor",component:InventorComponent
},{
    path:"wora",component:WoratechComponent
}
];
