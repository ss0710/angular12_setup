import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  details:any = {};

  getData(data:NgForm) {
    this.details = data;
  }

}
