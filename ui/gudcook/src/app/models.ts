import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

export class Entity {
    id : string;
}

export class Dish extends Entity{
    name : string;
    pictureId : string;  
    description : string;
    ratings : number;
    duration : number;
    ingredients : string[] ;
    equipment : string[];
    story: string;
    video : string;
    cuisine : string;
    creator : string;
};

export class Appointment extends Entity {
    startTime : Date;  
    duration : Number;
};

export class User extends Entity{
    displayName : string;
    email : string;
    joinDate: Date;
    description : string; 
    persona : string;
    imageId : string;   
};

export class Coach extends User{
    cuisines : string[];
    dishes : Dish[];
    appointments : Appointment[];
};

export class Seeker extends User{
    favorites : Dish[];
    appointments : Appointment[];
};

export class Duration {
    min : number;
    max : number;
};

export class CuisineSearchParams {
    date : NgbDateStruct ;
    cuisine : string;
    duration : Duration   
}

export class Card {
    image : string; 
    text : string;
    heading : string;
}

export class FilterData {
    title: string;
    options : string[] | number[];
    unit : string = "";
    selected : number |  string;
}

export class BannerData {
    image? : string;
    heading : string;
    content : string;
    buttonText : string;
    buttonRoute : string[];
    overlay? : true;
}
