import {Injectable} from 'angular2/core';
import {RequestOptions, URLSearchParams, Http, HTTP_PROVIDERS,Request,RequestMethod,Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable}       from 'rxjs/Observable';

@Injectable()
export class OacService {
    constructor(private http: Http) { }
    ot: Observable<string>;

    search(term: string) {
        //For get method  
        /*let serviceUrl = 'http://localhost:8080/getAutoCompleteData?search=' + term;
        this.ot = this.http
            .get(serviceUrl)
            .map(response => response.json());*/
        
        //for post method    
        let serviceUrl = 'http://localhost:8080/getAutoCompleteDataPost';
        var params = new URLSearchParams();
        params.set('search', term);
    
        this.ot = this.http.post(serviceUrl,"",new RequestOptions({search:params})).map(response => response.json());
             
        return this.ot;
    }
}
