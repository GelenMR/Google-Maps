import { Component, OnInit } from '@angular/core';
import { Marker, MarkerList } from '../../class/marker.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapEditComponent } from '../map-edit/map-edit.component';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public markers: Marker[] = [];
  public markerList: MarkerList[];

  // Initial Coordinates
  lat: number = 19.4978;
  lng: number = -99.1269;

  constructor(public MapService: MapService,
              public snackBar: MatSnackBar,
              public dialog: MatDialog ) {
    // const newMarker = new Marker(19.4978, -99.1269);
    // this.markers.push( newMarker );
    if ( localStorage.getItem('markers') ) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit() {
    this.printMarkerList();
    console.log(this.lat, this.lng);


  }

// PRINT MARKERS OF JSON

getMarkerList(): void {
  this.MapService.getMarker().subscribe(m => this.markerList = m);
}

printMarkerList() {
  let markerList = this.MapService.getMarker();
  //console.log('Marcadores:', markerList);

  markerList.forEach(el => {
    let marker = el;
    console.log('DATA:', marker);

    marker.forEach(e =>{
      let coords = e.Coordinates;
      const newMarker = new Marker(e.Name, e.Address, coords.lat, coords.lng);
      this.markers.push( newMarker );
      console.log('Coordenadas:', this.markers);
    })

  })
}


// SAVE / PRINT MARKER OF LOCAL STORAGE

  storeMarker() {
    localStorage.setItem('markers', JSON.stringify( this.markers ));
  }

  // CRUD OF MARKERS

  addMarker(event) {
    console.log(event);
    const coord: { lat: number, lng: number } = event.coords;
    const newMarker = new Marker('Marcador sin nombre', 'Sin Dirección de marcador', coord.lat, coord.lng);
    this.markers.push( newMarker );
    this.storeMarker();
    this.snackBar.open('Marcador Agregado!', 'CERRAR', { duration: 3000 });
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
