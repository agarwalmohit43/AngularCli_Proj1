import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MyDataService } from './my-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private  newService: MyDataService){}
  title = 'app';
  form;
  obj={
    id : '1',
    name : 'Mohit'
  };
  alphabetArrays = ['abc', 'def', 'ghi'];
  isTrue = true;
  isTrueOrFalse = false;
  firstName = 'Mohit';
  day = new Date(1995, 3, 28);
  arrayNumbers = [5, 1, 2, 7, 10, 15, 36, 45, 12, 44];
  formSubmission = function (user) {
    console.log(user);
    console.log(user.firstName);
    console.log(user.lastName);
  };

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastName: new FormControl('',this.textValidator),
      languages: new FormControl('')

    });

    //Service Data
    console.log(this.newService.success());
    console.log(this.newService.obj);

    this.newService.fetchData();
  }

  textValidator(control){
    if(control.value.length < 3)
      return {'lastName':true};
  }

  formSubmissionModal = function (form) {
      console.log(form);
  };



}
