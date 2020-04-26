import { Component, OnInit, Input } from '@angular/core';
import { BannerData, FilterData } from '../models';
import { GudcookService } from '../gudcook.service';
import { AngularFireStorage } from "@angular/fire/storage";
import { UploadStatus } from '../uploader/uploader.component';


@Component({
  selector: 'app-new-dish',
  templateUrl: './new-dish.component.html',
  styleUrls: ['./new-dish.component.css']
})
export class NewDishComponent implements OnInit {

  @Input()
  banner : BannerData = new BannerData;

  @Input()
  creator : string;

  uploadStatus : UploadStatus;
  imageUrl : string = '/assets/image-placeholder.png';
  imageId : string;
  filters : FilterData[];
  cuisines : string[];
  durations : number[];

  constructor(private gudcookService : GudcookService, 
    private storage : AngularFireStorage) { 
    this.banner.buttonText = null;
    this.banner.buttonRoute = null;
    this.banner.heading = 'Add your dish';
    this.banner.content = 'Describe your best dishes that you make for parties or easy weeknight meals. Here is your chance to showcase your style and passion for cooking';
    this.banner.image = '/assets/landing-page-top.png';
    this.banner.overlay = true;

    this.filters = [
      { title : 'Duration', selected : null ,  options : null, unit : 'Minutes'},
      { title : 'Cuisine', selected : null,  options : null, unit : ''},
    ]  
  }

  ngOnInit(): void {
    this.gudcookService.getCuisines().subscribe( x => {
      this.cuisines = x;
      this.filters[1].options = this.cuisines;
      this.filters[1].selected = this.cuisines[0];
    });

    this.gudcookService.getDurations().subscribe( x => {
      this.durations = x;
      this.filters[0].options = this.durations;
      this.filters[0].selected = this.durations[0];
    });

  }

  onStatusChange(status : UploadStatus) {
    console.log('File upload status')
    this.uploadStatus = status;
    if (this.uploadStatus.objectName) {
      this.imageId = this.uploadStatus.objectName;
      let pathRef = this.storage.ref(this.uploadStatus.objectName);
      pathRef.getDownloadURL().subscribe( url => {
        this.imageUrl = url;
      })
    }
  }

  getImagesDirectory() {
    if (this.creator )
      return 'images/' + this.creator;
    return null;
  }

  applyFilter() {

  }

  saveDish() {

  }
}
