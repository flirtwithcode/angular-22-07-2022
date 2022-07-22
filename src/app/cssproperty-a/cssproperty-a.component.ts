import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cssproperty-a',
  templateUrl: './cssproperty-a.component.html', //one
  styleUrls: ['./cssproperty-a.component.css', './newCssFile.css'], // external css
})
export class CsspropertyAComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
