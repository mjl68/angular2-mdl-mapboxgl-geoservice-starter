import { Angular2MdlMapboxglGeoserviceStarterPage } from './app.po';

describe('angular2-mdl-mapboxgl-geoservice-starter App', function() {
  let page: Angular2MdlMapboxglGeoserviceStarterPage;

  beforeEach(() => {
    page = new Angular2MdlMapboxglGeoserviceStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
