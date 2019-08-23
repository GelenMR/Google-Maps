import { Component, OnInit } from '@angular/core';
import { Marker } from '../../class/marker.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapEditComponent } from '../map-edit/map-edit.component';
import { MapService } from '../../services/map.service';
import { StoreDirectory } from '../../store-marker';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {

  public markers: Marker[] = [];
  public data: any;

  // tslint:disable-next-line: no-inferrable-types
  lat: number = 19.4978; lng: number = -99.1269;

  constructor(public snackBar: MatSnackBar,
              public dialog: MatDialog,
              public MapService: MapService ) {
    // const newMarker = new Marker(19.4978, -99.1269);
    // this.markers.push( newMarker );

    // getMarkers(): void {
    //   this.MapService.getData()
    //   .subscribe(StoreDirectory => this.data = StoreDirectory)
    // }

    if ( localStorage.getItem('markers') ) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit() {
    console.log(JSON.stringify( this.markers ));

  }

  addMarker(event) {
    console.log(event.coords.lng);
    // const coord: { lat: number, lng: number } = event.coords;
    const lat: number = event.coords.lat;
    const lng: number = event.coords.lng;
    // const newMarker = new Marker({ Name: 'Marcador sin nombre', Address: 'Sin Dirección de marcador', Coordinates: coord });
    const newMarker = new Marker( 'Marcador sin nombre', 'Sin Dirección de marcador', lat, lng );
    this.markers.push( newMarker );
    this.storeMarker();
    this.snackBar.open('Marcador Agregado!', 'CERRAR', { duration: 3000 });
  }

  storeMarker() {
    localStorage.setItem('markers', JSON.stringify( this.markers ) );
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
      if (!result) {
        return;
      }
      marker.Name = result.Name;
      marker.Address = result.Address;

      this.storeMarker();
      this.snackBar.open('Marcador Actualizado!', 'CERRAR', { duration: 3000 });
    });
  }
}
