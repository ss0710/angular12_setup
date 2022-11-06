import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  userName='';
  count = 0;
  color='RED';

  ngOnInit(): void {
  }

  clickHandler(name:string){
    alert(name);
  }

  getName(name:string){
    this.userName=name;
  }

  incrementCount(){
    this.count++;
  }

  decrementCount(){
    this.count--;
  }

}
