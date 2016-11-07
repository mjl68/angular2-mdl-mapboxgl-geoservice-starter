import {Component, OnInit} from '@angular/core';
import {MapService} from '../../services/map.service'
var mapboxgl =  require('mapbox-gl/dist/mapbox-gl.js');



@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService]
})
export class MapComponent {
  constructor(private mapService: MapService) {
  }
  ngOnInit() {
    this.mapService.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 9,
      center: [5.382992, 52.232982]
    });
    // this.mapService.map.addControl(new mapboxgl.NavigationControl({position: 'top-left'}));
    // this.mapService.map.addControl(new mapboxgl.GeolocateControl({position: 'top-right'}));
  }


  goToLatLon(){
    this.mapService.map.flyTo({
      center: [
        -74.50 + (Math.random() - 0.5) * 10,
        40 + (Math.random() - 0.5) * 10
      ]
    });
  }
}
