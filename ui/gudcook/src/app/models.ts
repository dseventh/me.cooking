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
};

export class Appointment extends Entity {
    startTime : Date;  
    duration : Number;
};

export class User extends Entity{
    firstName : string;
    lastName : string;
    email : string;
    joinDate: Date;
    description : string; 
    persona : string;   
};

export class Coach extends User{
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