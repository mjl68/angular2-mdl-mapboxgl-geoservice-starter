import {Injectable} from '@angular/core';
import {URLSearchParams, Jsonp, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) {}
  getWikipediaInformation (term: string) {
    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
      .get('http://nl.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
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
