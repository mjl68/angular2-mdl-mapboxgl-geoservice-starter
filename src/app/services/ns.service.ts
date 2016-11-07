import {Injectable} from '@angular/core';
import {URLSearchParams, Jsonp, Response, Headers, Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class NsService {
  constructor(private http: Http){

  }


  header:Headers=new Headers({
    'Authorization': 'Basic aW5mb0Byb2JlcnRib2Vuc21hLm5sOmhXMU4xYmh6UWQ2YWtuWXktV0wtOENwWWhQTkJ4OGhzcmxvaUdfWGtDUTZ6aGk4WWdCckcwQQ==',
    'Accept': '*',
    // 'Accept-Encoding': 'gzip, deflate, sdch',
    // 'Host': 'webservices.ns.nl'

});

  getNsInformation (term: string) {
    return this.http.get('http://webservices.ns.nl/ns-api-avt?station='+term)
      .map(this.extractData)
  }

  private extractData(res: Response) {
    console.log(res)
    return res.json();
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
