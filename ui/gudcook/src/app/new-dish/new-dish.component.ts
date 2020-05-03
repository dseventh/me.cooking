import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BannerData, FilterData, Dish } from '../models';
import { GudcookService } from '../gudcook.service';
import { AngularFireStorage } from "@angular/fire/storage";
import { UploadStatus } from '../uploader/uploader.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-dish',
  templateUrl: './new-dish.component.html',
  styleUrls: ['./new-dish.component.css']
})
export class NewDishComponent implements OnInit {

  @Input()
  banner : BannerData = new BannerData;

  uploadStatus : UploadStatus;
  imageUrl : string = '/assets/image-placeholder.png';
  dish : Dish = new Dish;

  filters : FilterData[];
  cuisines : string[];
  durations : number[];

  constructor(private gudcookService : GudcookService, 
    private auth : AngularFireAuth,    
    private storage : AngularFireStorage, 
    private router : Router) { 
    this.dish.ingredients = [];
    this.dish.equipment = [];
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

  saveDish() {
    this.dish.cuisine = this.filters[1].selected.toString();
    this.dish.duration = this.filters[0].selected as number;
    this.gudcookService.setDish(this.dish).then( () => {
      this.router.navigate(['/coachhome']);
    });
  }

  ngOnInit(): void {
    this.auth.currentUser.then( u => {
      this.dish.creator = u.uid;
    })

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
      let pathRef = this.storage.ref(this.uploadStatus.objectName);
      pathRef.getDownloadURL().subscribe( url => {
        this.imageUrl = url;
        this.dish.pictureId = url;
      })
    }
  }

  getImagesDirectory() {
    if (this.dish.creator )
      return 'images/' + this.dish.creator;
    return null;
  }

  applyFilter() {

  }

  ingredientAdd(item) {
    this.dish.ingredients.push(item);
  }

  ingredientRemove(item) {
    this.dish.ingredients = this.dish.ingredients.filter( x => x != item);
  }

  equipmentAdd(item) {
    this.dish.equipment.push(item);
  }

  equipmentRemove(item) {
    this.dish.equipment = this.dish.equipment.filter( x => x != item);
  }

}
