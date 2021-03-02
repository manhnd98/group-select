import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'group-select-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'group-select';

  form: any;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      form1: [''],
      form2: [''],
      form3: [''],
      form4: [''],
      form5: [''],
    })
  }

  control = new FormControl();

}
