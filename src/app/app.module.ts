import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularFireModule } from '@angular/fire/compat';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp } from '@angular/fire/app';



var config = {
  
    apiKey: "AIzaSyCNKqJKaa84frGkeCs262Nr5rXQ4v8Vnao",
    authDomain: "reactfirebasenvo.firebaseapp.com",
    databaseURL: "https://reactfirebasenvo.firebaseio.com",
    projectId: "reactfirebasenvo",
    storageBucket: "reactfirebasenvo.appspot.com",
    messagingSenderId: "233259277334",
    appId: "1:233259277334:web:8a095c08cf1be5f7f2a937",
    measurementId: "G-VC86JDTVZ3"
  
};


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
            
    
    
    
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
