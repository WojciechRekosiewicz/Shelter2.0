//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
    }

    public adverts = [];

    loadAdrverts() {
        return this.http.get("/api/Adverts")
            .pipe(
                map((data: any[]) => {
                    this.adverts = data;
                    return true;
                })); 
            
            
    }
}