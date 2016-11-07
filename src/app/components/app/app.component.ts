import {Component, Output, EventEmitter} from '@angular/core';
import {GeocodingService} from '../../services/geocoding.service';
import {WikipediaService} from '../../services/wikipedia.service';
import {MapService} from '../../services/map.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  // constructor(private geoService: GeocodingService, private wikiService: WikipediaService, private mapService: MapService) {
  // }
  // private search: string;
  // @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  //
  //
  // searchServices(){
  //   // console.log(this.wikiService.getWikipediaInformation(this.search));
  //
  //   this.geoService.getGeoInformation(this.search).subscribe(
  //     results => {
  //       console.log(this.mapService.baseMaps);
  //       console.log(this.mapService.map);
  //       console.log("VALUE RECEIVED: ", results);
  //       this.notifyParent.emit({results});
  //     },
  //     error => {
  //       console.log("ERROR: ", error);
  //     },
  //     () => {
  //       console.log("Completed");
  //     }
  //   );
  //
  //   this.search = '';
  // }

}
