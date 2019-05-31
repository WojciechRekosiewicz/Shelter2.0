import { Component } from "@angular/core";



@Component({
    selector: "advert-list",
    templateUrl: "advertList.component.html",
    styleUrls: []
})
export class AdvertList {
    public adverts = [{
        title: "First Animal",
        shortDescription: "doggo"
    }, {
        title: "Second Animal",
        shortDescription: "doggo"
    }];
}