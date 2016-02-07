import {Injectable} from 'angular2/core';
import {Jsonp, URLSearchParams, Http, HTTP_PROVIDERS, Headers, Request, RequestMethod} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable}       from 'rxjs/Observable';

@Injectable()
export class OacService {
    constructor(private http: Http) { }
    ot: Observable<string>;

    search(term: string) {

        var params = new URLSearchParams();
        params.set('search', term);
        



        /*   let serviceUrl = 'http://localhost:8080/getAutoCompleteData?search='+term;
          this.ot = this.http
               .get(serviceUrl)
               .map(response => response.json())
               ;*/

        let serviceUrl = 'http://localhost:8080/getAutoCompleteDataPost';
        var headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        
       /*this.ot = this.http.request(new Request({
            method: RequestMethod.Post,
            url: serviceUrl,
            search: term
        })).map(response => response.json());*/

        this.ot = this.http.post(serviceUrl,JSON.stringify({ firstName: 'Joe', lastName: 'Smith' }),
             params).map(response => response.json());

        return this.ot;
    }
}
