// import { Coords } from 'src/app/class/coordinates.class';

export class Marker {
  // public Coordinates: Coords[];
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
  // constructor( Coordinates: Coords[]) {
  //   this.Coordinates = Coordinates;
  //   this.Name = Name;
  //   this.Address = Address;
  // }
}
