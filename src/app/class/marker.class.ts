// import { Coords } from 'src/app/class/coordinates.class';

export class Marker {

  // tslint:disable-next-line: no-inferrable-types
  public Name?: string;
  // tslint:disable-next-line: no-inferrable-types
  public Address?: string;
  public Lat: number;
  public Lng: number;
  // public Coordinates: {
  //   lat: number;
  //   lng: number;
  // };

  constructor( Name: string, Address: string, Lat: number, Lng: number ) {
    this.Name = Name;
    this.Address = Address;
    // this.Coordinates = Coordinates;
    this.Lat = Lat;
    this.Lng = Lng;
  }
}
