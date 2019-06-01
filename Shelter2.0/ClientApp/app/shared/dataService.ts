//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';



export class DataService {

    constructor(private http: HttpClient) {
    }

    public adverts = [];
}