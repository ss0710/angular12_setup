import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor() { }

  colorValue = 'green';
  toggleVariable = true;

  ngOnInit(): void {
  }

  toggleFunction(){
    console.log("called");
    if(this.toggleVariable){
      this.colorValue = 'red';
      this.toggleVariable = false;
    } else {
      this.colorValue = 'green';
      this.toggleVariable = true;
    }
    
  }

}
