import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent {

  selectedValue: any = '';
  add:any=[1]
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


}
