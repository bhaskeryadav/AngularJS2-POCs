import {Component} from 'angular2/core';
import {Jsonp,Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map'

@Component({
    selector: 'my-app',
    viewProviders: [HTTP_PROVIDERS],
    template: `<h1>My First Angular 2</h1>           
     <div>
      <h1>List</h1>
      <ul>
        <li *ngFor="#person of people">
          Name : {{person.name}}<br/>
          Id : {{person.id}}<br/>
          Salary : {{person.salary}}<br/>
        </li>
      </ul>
    </div>`
})
export class AppComponent {
    people: Object[];
    
    constructor(http: Http) {
       http.get('http://localhost:8080/test')
            .map(res => res.json())
            .subscribe(people => this.people = people);
            
    }
}