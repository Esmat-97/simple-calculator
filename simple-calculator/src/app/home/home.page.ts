import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num1:any;
  num2:any;
  result:any;

  add(){
this.result=this.num1+this.num2;
  }

  subtract(){
    this.result=this.num1-this.num2;
  }

  devide(){
    if(this.num2 !==0){
    this.result=this.num1 / this.num2;
    }
else{
  alert('cant devide by zero')
}
  }

  multi(){
    this.result=this.num1*this.num2;
  }

  constructor() {}

}
