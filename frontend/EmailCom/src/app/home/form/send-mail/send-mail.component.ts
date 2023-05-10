import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent {

  selectedValue: any = '';
  add:any=[1]
  currentPage= 1
  constructor() {

  }

  ngOnInit(): void {
 
  }
  onSelect(value: any) {
    this.selectedValue = value;

}

// addInp(){
//  let container = document.getElementById("container");
//  let input = document.createElement("input");
//  let dropdown = document.getElementById('drop')
//  input.type = "text";
//  input.name = "tname" + 1;
//  container.appendChild(input);
//  dropdown.firstChild
// }

addInp(){
  this.add.push(1)
  console.log(this.add)
}

removeInp(i:any){
  {
    this.add.pop(1);
  }
  
}
  // if(res > -1){
  //   this.add.splice(res,1)
  //   console.log(this.add);
    

  // console.log(this.add)

}