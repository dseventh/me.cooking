import { Component, OnInit } from '@angular/core';
import { Seeker,Duration, CuisineSearchParams, User } from '../models';
import { CacheService } from '../cache.service';
import { Router } from '@angular/router';
import { GudcookService } from '../gudcook.service';
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFireAuth } from '@angular/fire/auth';
import { UploadStatus } from '../uploader/uploader.component';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  user : User = null;
  imageUrl : string = '/assets/image-placeholder.png';
  currentStatus : UploadStatus;

  constructor(
    private gudcookService : GudcookService, 
    private firebaseAuth: AngularFireAuth, 
    private storage : AngularFireStorage,
    private router : Router
  ) { 

  }

  ngOnInit(): void {
    //TODO put flatmap here
    this.firebaseAuth.currentUser.then( u => {
      if (u) {
        this.gudcookService.getUser(u.uid).subscribe( user => {
          this.user = user;
          console.log(`Displayname is ${u.displayName}, joindate = ${user.joinDate}`);
          if (user.imageId) {
            console.log(`Image id ${user.imageId}`);
            let pathRef = this.storage.ref(user.imageId);
            pathRef.getDownloadURL().subscribe( url => {
              console.log(`Download url ${url}`);
              this.imageUrl = url;
            })
          }
          else {
            console.log(`No image id for user ${user.id}`);
          }    
        })
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
    if (this.user && this.user.id)
      return 'images/' + this.user.id;
    return null;
  }

}
