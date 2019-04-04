import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  phoneNumbers: Array<string> = ['+359', '+751', '+888'];
  @ViewChild('form')
  htmlForm: NgForm;
  constructor() { }

  ngOnInit() {
  }
  register(){
    if(!this.htmlForm.invalid){
      this.htmlForm.reset();

    }
   
  }

}
