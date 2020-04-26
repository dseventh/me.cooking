import { Component, OnInit } from '@angular/core';
import { Seeker,Duration, CuisineSearchParams } from '../models';
import { CacheService } from '../cache.service';
import { Router } from '@angular/router';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { GudcookService } from '../gudcook.service';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { AngularFireAuth } from '@angular/fire/auth';
import { UploadStatus } from '../uploader/uploader.component';

@Component({
  selector: 'app-seekerhome',
  templateUrl: './seekerhome.component.html',
  styleUrls: ['./seekerhome.component.css']
})
export class SeekerhomeComponent implements OnInit {
  seeker : Seeker = null;
  imageUrl : string;
  currentStatus : UploadStatus;

  constructor(private gudcookService : GudcookService, 
    private firebaseAuth: AngularFireAuth, 
    private calendar :NgbCalendar,
    private storage : AngularFireStorage,
    private router : Router) { 
    }

  ngOnInit() {
    //TODO put flatmap here
    this.firebaseAuth.currentUser.then( u => {
      if (u) {
        this.gudcookService.getUser(u.uid).subscribe( user => {
          this.seeker = user as Seeker;
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
      this.seeker.imageId = this.currentStatus.objectName;
      let pathRef = this.storage.ref(this.currentStatus.objectName);
      pathRef.getDownloadURL().subscribe( url => {
        console.log('Setting image url')
        this.imageUrl = url;
      })
    }
  }

  getImagesDirectory() {
    if (this.seeker && this.seeker.id)
      return 'images/' + this.seeker.id;
    return null;
  }

}
