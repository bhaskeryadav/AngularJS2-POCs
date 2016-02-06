import {Injectable} from 'angular2/core';
import {Jsonp, URLSearchParams, Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable}       from 'rxjs/Observable';

@Injectable()
export class OacService {
    constructor(private http: Http) { }
    ot: Observable<string>;

    search(term: string) {

        var params = new URLSearchParams();
        params.set('search', term);


        let serviceUrl = 'http://localhost:8080/getAutoCompleteData?search='+term;
        this.ot = this.http
            .get(serviceUrl)
            .map(request => request.json())
            ;

        return this.ot;
    }
}
