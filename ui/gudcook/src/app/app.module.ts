import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BannerComponent } from './banner/banner.component';
import { DishBrowserComponent } from './dish-browser/dish-browser.component';
import { GudcookService } from './gudcook.service';
import { ReserveComponent } from './reserve/reserve.component';
import { FirstloginComponent } from './firstlogin/firstlogin.component';
import { UploaderComponent } from './uploader/uploader.component';
import { ProfileComponent } from './profile/profile.component';
import { DishEditorComponent } from './dish-editor/dish-editor.component';
import { NewDishComponent } from './new-dish/new-dish.component';
import { TagInputModule } from 'ngx-chips';
import { BagComponent } from './bag/bag.component';
import { DishEditComponent } from './dish-edit/dish-edit.component';
import { StudentEditProfileComponent } from './student-edit-profile/student-edit-profile.component';
import { TeacherEditProfileComponent } from './teacher-edit-profile/teacher-edit-profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ToastService } from './toast-service';
import { ToastsContainer } from "./toasts-container.component";
import { TimeFormatPipe } from "./custom-pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    CompanyComponent,
    BlogComponent,
    DishDetailComponent,
    LoginComponent,
    SignupComponent,
    BannerComponent,
    DishBrowserComponent,
    ReserveComponent,
    FirstloginComponent,
    UploaderComponent,
    ProfileComponent,
    DishEditorComponent,
    NewDishComponent,
    BagComponent,
    DishEditComponent,
    StudentEditProfileComponent,
    TeacherEditProfileComponent,
    EditprofileComponent,
    ToastsContainer,
    TimeFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TagInputModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'cooking-gig'),
    AngularFirestoreModule,
    AngularFireAuthModule 
  ],
  providers: [AuthService, ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
