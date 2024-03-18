import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'simplecrm-efa95',
          appId: '1:177543129673:web:6e74045f75483321206d98',
          storageBucket: 'simplecrm-efa95.appspot.com',
          apiKey: 'AIzaSyCvcjxaTSSfp0I7yh-XqxFzMCYGstvO6WA',
          authDomain: 'simplecrm-efa95.firebaseapp.com',
          messagingSenderId: '177543129673',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
