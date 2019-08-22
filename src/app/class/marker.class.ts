// import { Coords } from 'src/app/class/coordinates.class';

export class Marker {
  // public lat: number;
  // public lng: number;

  // tslint:disable-next-line: no-inferrable-types
  public Name?: string = 'Marcador sin nombre';
  // tslint:disable-next-line: no-inferrable-types
  public Address?: string = 'Sin Dirección de marcador';
  public Coordinates: {
    lat: number;
    lng: number;
  };

  // constructor(lat: number, lng: number) {
  //   this.lat = lat;
  //   this.lng = lng;
  // }
  constructor({ Name, Address, Coordinates }: { Name: string; Address: string; Coordinates: any; }) {
    this.Name = Name;
    this.Address = Address;
    this.Coordinates = Coordinates;
  }
}
