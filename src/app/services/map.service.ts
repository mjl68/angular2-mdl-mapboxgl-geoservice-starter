import {Injectable} from '@angular/core';
var mapboxgl =  require('mapbox-gl/dist/mapbox-gl.js');


@Injectable()
export class MapService {
  map: any;
  baseMaps: any;

  constructor() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iLWIiLCJhIjoicXBQRTF6TSJ9.0WMEFoE4ld7WP55wwwNPhg';
    this.baseMaps = [
      { name: 'Street', id: 'street' },
      { name: 'Bright', id: 'bright' },
      { name: 'Light', id: 'light' },
      { name: 'Satellite', id: 'satellite' }
    ];
  }

}
