import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {ContactValidators} from './ContactValidators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact-component.css']
})
export class ContactComponent implements OnInit {
  firstNum: number;
  secondNum: number
  contactForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstNum = Math.floor(Math.random() * 10) + 1;
    this.secondNum = Math.floor(Math.random() * 10) + 1;  

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, ContactValidators.validateName])],
      email: ['', Validators.compose([Validators.required, ContactValidators.validateEmail])],
      phone: '',
      message: ['', Validators.required],
      human: ['', Validators.compose([Validators.required, ContactValidators.validateHuman(this.firstNum, this.secondNum)])]
    });
  }
  onContact() {
    console.log(this.contactForm.value);
  }
}
