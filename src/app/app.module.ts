import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MapEditComponent } from './components/map-edit/map-edit.component';

// Angular Google Maps
import { AgmCoreModule } from '@agm/core';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [
    MapEditComponent
  ],
  declarations: [
    AppComponent,
    MapComponent,
    MapEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyClQXlY-taRxr2PTbQgr3TqevY1ZjOKRdE'
      // AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
