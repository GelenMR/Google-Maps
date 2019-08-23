
export class Marker {

  public Name?: string;
  public Address?: string;
  public lat: number;
  public lng: number;


  constructor(Name: string, Address: string, lat: number, lng: number) {
    this.Name = this.Name;
    this.Address = Address;
    this.lat = lat;
    this.lng = lng;
  }
}

export class MarkerList {

  public Name: string;
  public Address: string;
  public Coordinates: {
    lat: number;
    lng: number;
  };

  // constructor(lat: number, lng: number) {
  //   this.lat = lat;
  //   this.lng = lng;
  // }
}
