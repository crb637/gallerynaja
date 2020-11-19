import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AngularFireModule} from '@angular/fire'
import {AngularFireStorageModule} from '@angular/fire/storage'
import {AngularFireDatabaseModule} from '@angular/fire/database'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { environment } from './environment';

import{ ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './images/image/image.component';
import { ImagesComponent } from './images/images.component';
import { ImageService } from './image.service';
import { ImageListComponent } from './images/image-list/image-list.component'

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    ImageComponent, ImagesComponent, ImageListComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: [ImageService]
})
export class AppModule { }
