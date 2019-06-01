import { Component, OnInit } from "@angular/core";
import { DataService } from '../shared/dataService';



@Component({
    selector: "advert-list",
    templateUrl: "advertList.component.html",
    styleUrls: []
})
export class AdvertList implements OnInit {

    constructor(private data: DataService) {
        
    }


    public adverts = [];

    ngOnInit(): void {
        this.data.loadAdrverts()
            //.subscribe(success => {
            //    if (success) {
            //        this.adverts = this.data.adverts;
            //    }
            //});
    }
}