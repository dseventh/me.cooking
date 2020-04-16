import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CompanyComponent } from './company/company.component';
import { BlogComponent } from './blog/blog.component';
import { CoachhomeComponent } from './coachhome/coachhome.component';
import { SeekerhomeComponent } from './seekerhome/seekerhome.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'coach',
    component: CoachhomeComponent
  },
  {
    path: 'dish/:id',
    component: DishDetailComponent
  },
  {
    path: 'seeker',
    component: SeekerhomeComponent
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
    redirectTo: '/home',
    pathMatch: 'full'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
