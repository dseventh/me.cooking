import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CompanyComponent } from './company/company.component';
import { BlogComponent } from './blog/blog.component';
import { CoachhomeComponent } from './coachhome/coachhome.component';
import { SeekerhomeComponent } from './seekerhome/seekerhome.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import {LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {AuthGuardService as AuthGuard } from './auth-guard.service';
import { ReserveComponent } from './reserve/reserve.component';
import { FirstloginComponent } from "./firstlogin/firstlogin.component";
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'firstlogin',
    component: FirstloginComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'coach',
    component: CoachhomeComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'dish/:id',
    component: DishDetailComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'seeker',
    component: SeekerhomeComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'reserve',
    component: ReserveComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
