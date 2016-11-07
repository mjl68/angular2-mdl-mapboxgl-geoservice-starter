import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {GeocodingService} from "../../services/geocoding.service";
import {WikipediaService} from "../../services/wikipedia.service";
import {NsService} from "../../services/ns.service";
import {MapService} from "../../services/map.service";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [GeocodingService, WikipediaService, NsService, MapService]
})
export class SearchComponent {
  constructor(private geoService: GeocodingService, private wikiService: WikipediaService, private nsService:NsService, private mapService: MapService) {
  }

  private search: string;

  @Output() myEvent = new EventEmitter();

  searchServices(){
    this.geoService.getGeoInformation(this.search).subscribe(
      results => {
        console.log(results);
      },
      error => {
        console.log("ERROR: ", error);
      },
      () => {
        console.log("Completed");
      }
    );

    this.wikiService.getWikipediaInformation(this.search).subscribe(
      results => {
        console.log(results);
      },
      error => {
        console.log("ERROR: ", error);
      },
      () => {
        console.log("Completed");
      }
    );

    // this.nsService.getNsInformation(this.search).subscribe(
    //   results => {
    //     console.log(results);
    //   },
    //   error => {
    //     console.log("ERROR: ", error);
    //   },
    //   () => {
    //     console.log("Completed");
    //   }
    // );

    this.search = '';
  }

}
