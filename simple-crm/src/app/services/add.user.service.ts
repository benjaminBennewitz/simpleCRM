import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, getDoc, doc, onSnapshot, collectionData,
} from '@angular/fire/firestore';
import { User } from '../../models/user.class';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  users: User[] = [];
  items$;
  items;

  firestore: Firestore = inject(Firestore);

  constructor() {
    this.items$ = collectionData(this.getUsersRef());
    this.items = this.items$.subscribe((list) => {
      list.forEach((element) => {
        console.log(element);
      });
    });
    this.items.unsubscribe();
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }
}
