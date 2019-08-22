
export class Marker {
  public lat: number;
  public lng: number;
  // tslint:disable-next-line: no-inferrable-types
  public Name: string = 'Marcador sin nombre';
  // tslint:disable-next-line: no-inferrable-types
  public Address: string = 'Sin Dirección de marcador';

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}
