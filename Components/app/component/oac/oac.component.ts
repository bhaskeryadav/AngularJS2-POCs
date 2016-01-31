import {Component, Output, Input, OnInit, EventEmitter} from 'angular2/core';
import { HTTP_PROVIDERS}  from 'angular2/http';
import {Observable}       from 'rxjs/Observable';
import {OacService} from './oac.service';

@Component({
    selector: 'asset-oac',
    templateUrl: 'app/components/oac/oactemplate.html',
    providers: [HTTP_PROVIDERS, OacService],
    styles: [`
  .overlay{
  position: absolute;
  top: auto;
  left: auto;
  width: auto;
  height: auto;
  z-index: 10;
  background-color: rgba(128,128,128,1.0);
}
  `]
})
export class OacComponent {

    
    @Input() bindModelData: any;
    @Output() bindModelDataChange: EventEmitter<any> = new EventEmitter();
    
    constructor(private _oacService: OacService) { }

    items: Observable<string>;


    search(term: string) {
        this.items = this._oacService.search(term);

    }

    setData(data: string) {

        this.bindModelData = data;
        this.bindModelDataChange.emit(data);

        console.log(data)
    }
}
