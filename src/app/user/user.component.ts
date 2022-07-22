import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',//act as html tag / element
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public name = "kumar"; // data binding
  constructor() { }

  ngOnInit() {
  }

}