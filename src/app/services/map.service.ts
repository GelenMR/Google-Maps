import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MarkerList } from '../class/marker.class';
import { markerDirectory } from '../store-directory';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  dataMarkers: Observable<MarkerList>;

  constructor() { }

  getMarker(): Observable<MarkerList[]> {
    return of (markerDirectory);
  }
}
