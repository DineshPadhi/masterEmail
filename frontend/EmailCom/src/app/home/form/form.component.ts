import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  host: {
    '[sandbox]': `'allow-scripts'`,
    '[attr.sandbox]': `'allow-scripts'`,
  },
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  ngOnInit(): void {}

}
