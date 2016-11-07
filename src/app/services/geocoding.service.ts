import {Injectable} from '@angular/core';
import {URLSearchParams, Jsonp} from '@angular/http';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GeocodingService{

  constructor(private http: Http){

  }

  getGeoInformation(term: string) {
      return this.http
          .get('http://nominatim.openstreetmap.org/search/'+term+'?format=json')
          .map(this.extractData)
      }

      private extractData(res: Response) {
        return res.json();
      }

      private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        console.error(errMsg); // log to console instead

        return Observable.throw(errMsg);
      }
}
