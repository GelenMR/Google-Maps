import { Component, OnInit } from '@angular/core';
import { Marker } from '../../class/marker.class';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapEditComponent } from '../map-edit/map-edit.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public markers: Marker[] = [];

  // tslint:disable-next-line: no-inferrable-types
  lat: number = 19.4978; lng: number = -99.1269;

  constructor(public snackBar: MatSnackBar,
              public dialog: MatDialog ) {
    // const newMarker = new Marker(19.4978, -99.1269);
    // this.markers.push( newMarker );
    if ( localStorage.getItem('markers') ) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit() {
    console.log(this.markers);

  }

  addMarker(event) {
    console.log(event);
    const coords: { lat: number, lng: number } = event.coords;
    const newMarker = new Marker(coords.lat, coords.lng);
    this.markers.push( newMarker );
    this.storeMarker();
    this.snackBar.open('Marcador Agregado!', 'CERRAR', { duration: 3000 });
  }

  storeMarker() {
    localStorage.setItem('markers', JSON.stringify( this.markers ));
  }

  deleteMarker(i: number) {
    this.markers.splice(i, 1);
    this.storeMarker();
    this.snackBar.open('Marcador Eliminado!', 'CERRAR', { duration: 3000 });
  }

  editMarker(marker: Marker): void {
    const dialogRef = this.dialog.open(MapEditComponent, {
      width: '250px',
      data: { Name: marker.Name, Addresss: marker.Address }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
