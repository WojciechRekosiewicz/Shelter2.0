import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';



@Component({
    selector: "advert-list",
    templateUrl: "advertList.component.html",
    styleUrls: []
})
export class AdvertList {

    
    constructor(private data: DataService) {
        this.adverts = data.adverts;
    }


    public adverts = [];
}