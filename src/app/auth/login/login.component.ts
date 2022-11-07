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
  color1='GREEN';
  users=['Sudheer', 'Tiwari', 'CM c'];
  usersDetail=[
    {
      name:'anil',
      email: 'xyz',
      phoneNumber: '7565905127'
    },
    {
      name:'John',
      email: 'xyz',
      phoneNumber: '7565905127'
    },
    {
      name:'Tacos',
      email: 'xyz',
      phoneNumber: '7565905127'
    }
  ];

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
