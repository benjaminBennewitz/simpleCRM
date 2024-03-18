import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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

  constructor(private firestore: AngularFirestore){

  }

  logUser() {
    // Den Timestamp vom birthDate erhalten
    const timestamp = this.birthDate.getTime();

    // Das Datum-Objekt erstellen und den Timestamp übergeben
    const date = new Date(timestamp);

    // Das Datum im gewünschten Format (TTMMJJJJ) extrahieren
    const day = ('0' + date.getDate()).slice(-2); // Tag
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Monat (+1, da Monate von 0 bis 11 gehen)
    const year = date.getFullYear(); // Jahr

    // Das Datum im gewünschten Format zusammensetzen (TTMMJJJJ)
    const formattedDate = parseInt(day + month + year);

    // Die user.birthDate der formatierten Zahl zuweisen
    this.user.birthDate = formattedDate;

    // Die user-Variable ausgeben
    console.log(this.user);

    this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result:any) => {
        console.log('Adding to database done', result);
      });
  }
}
