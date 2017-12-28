import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WowService {

    constructor(private http: Http) { }

    token: string = "5uh9e3w7vmw3rbbm5n46vy8q5zvaebv5";

    buscarAuction() :  Observable<Response>{
        const url = "https://us.api.battle.net/wow/auction/data/azralon?locale=pt_BR&apikey=" + this.token;
        return this.requisitar(url);
    }

    requisitar(url: string): Observable<Response>{
        const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', "http://localhost:4200");
        return this.http.get(url, {headers: headers});
    }

}