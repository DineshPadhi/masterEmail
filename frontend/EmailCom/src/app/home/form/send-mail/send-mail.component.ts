import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css'],
})
export class SendMailComponent {
  selectedValue: any = '';
  myForm: FormGroup;
  add: number = 1;
  addArr: any = [1];
  fields: any = {};
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}
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

  createForm() {
    this.fields = {
      templateCode: [''],
      tname: [''],
      lang: [''],
    };
    this.myForm = this.fb.group(this.fields);
  }

  addInp() {
    this.add += 1;
    let tname = '';
    this.myForm = this.fb.group(this.fields);
    this.fields['tname' + this.add] = document.getElementById(
      'tname' + this.add
    );
    this.addArr.push(this.add);
    this.fields.tname.value = '';
    console.log(this.addArr);
    console.log('filed is ', this.fields);
  }

  value: any;

  send(data: any, e: any) {
    e.preventDefault();
    this.value = data;
    console.log(this.value);
  }
  func() {}
  somefunc() {
    console.log('yeah');
  }
}
