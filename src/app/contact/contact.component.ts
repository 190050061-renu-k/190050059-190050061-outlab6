import { Component, OnInit } from '@angular/core';
import { Details } from '../contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: Details ={
     name: 'Renu',
     email: 'rainy422002@gmail.com',
     roll: '190050061'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
