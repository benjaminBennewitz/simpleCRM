import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, doc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  firestore: Firestore = inject(Firestore);
  items$;
  items;

  constructor() {
    this.items$ = collectionData(this.getUsersRef());
    this.items = this.items$.subscribe((list) => {
      list.forEach(user => {
        console.log(user);
      })
    });
    this.items.unsubscribe();
  }

  getUsersRef(){
    return collection(this.firestore, 'users');
  }

  getSingleUser(colId:string, docId:string){
    return doc (collection(this.firestore, colId), docId);
  }

  convertDate() {
    const timestamp = this.birthDate.getTime();
    const date = new Date(timestamp);
    const day = ('0' + date.getDate()).slice(-2); 
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const formattedDate = parseInt(day + month + year);
    this.user.birthDate = formattedDate;
    return formattedDate;
  }

  logUser() {
    this.convertDate();
    console.log(this.user);
  }
}
