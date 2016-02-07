import {Injectable} from 'angular2/core';
import { URLSearchParams, Http, HTTP_PROVIDERS,Request,RequestMethod,Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable}       from 'rxjs/Observable';

@Injectable()
export class OacService {
    constructor(private http: Http) { }
    ot: Observable<string>;

    search(term: string) {

        /*let serviceUrl = 'http://localhost:8080/getAutoCompleteData?search=' + term;
        this.ot = this.http
            .get(serviceUrl)
            .map(response => response.json());*/
            
        let serviceUrl = 'http://localhost:8080/getAutoCompleteDataPost';
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('search',term)
       // headers.append('Access-Control-Allow-Methods','GET, POST, OPTIONS');
    
        this.ot = this.http.post(serviceUrl,'search='+term,headers).map(response => response.json());
             
        return this.ot;
    }
}
