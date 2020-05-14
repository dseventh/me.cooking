import { Component, OnInit } from '@angular/core';
import { BannerData, User } from '../models';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { GudcookService } from '../gudcook.service';
import { UploadStatus } from '../uploader/uploader.component';


@Component({
  selector: 'app-firstlogin',
  templateUrl: './firstlogin.component.html',
  styleUrls: ['./firstlogin.component.css']
})
export class FirstloginComponent implements OnInit {
  bannerData : BannerData = {
    buttonRoute : null,
    buttonText : null,
    content : 'A place where you can search for recipes or leverage cooking expertise of experiences chefs that can whip up anything delicious with nothing!',
    heading : 'Welcome to Gudcook',
    image : '/assets/landing-page-top.jpg',
    overlay : true
  };
  user : User = new User;
  imageUrl : string;
  currentStatus : UploadStatus;

  constructor(private gudcookService : GudcookService, 
    private firebaseAuth: AngularFireAuth, 
    private storage : AngularFireStorage,
    private router : Router) { }
  
  ngOnInit(): void {
    
    this.firebaseAuth.currentUser.then( u => {
      if (u) {
        console.log('Setting user details')
        this.user.id = u.uid;
        this.user.email = u.email;
        this.user.displayName = u.displayName;
        this.user.joinDate = new Date();
      }
    });
  }

  onStatusChange(status : UploadStatus) {
    console.log('File upload status')
    this.currentStatus = status;
    if (this.currentStatus.objectName) {
      this.user.imageId = this.currentStatus.objectName;
      let pathRef = this.storage.ref(this.currentStatus.objectName);
      pathRef.getDownloadURL().subscribe( url => {
        console.log('Setting image url')
        this.imageUrl = url;
      })
    }
  }
  
  getImagesDirectory() {
    return 'images/' + this.user.id;
  }
  
  saveProfile() {
    if (this.user.persona)
      this.gudcookService.setUser(this.user).then( u => {
        this.router.navigate(['/editprofile']);
      })
    else alert('Choose role');
  }
  
}
