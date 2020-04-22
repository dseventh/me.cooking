import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CompanyComponent } from './company/company.component';
import { BlogComponent } from './blog/blog.component';
import { CoachhomeComponent } from './coachhome/coachhome.component';
import { SeekerhomeComponent } from './seekerhome/seekerhome.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BannerComponent } from './banner/banner.component';
import { DishBrowserComponent } from './dish-browser/dish-browser.component';
import { GudcookService } from './gudcook.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    CompanyComponent,
    BlogComponent,
    CoachhomeComponent,
    SeekerhomeComponent,
    DishDetailComponent,
    LoginComponent,
    SignupComponent,
    BannerComponent,
    DishBrowserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase, 'cooking-gig'),
    AngularFirestoreModule,
    AngularFireAuthModule          
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
