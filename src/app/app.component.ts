import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyA3DGmf3NxyBtFp4A_BwLyn3YzoBVYwcg8",
      authDomain: "whoisforhire.firebaseapp.com",
    });
  }

}
