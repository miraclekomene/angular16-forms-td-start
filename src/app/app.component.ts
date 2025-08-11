import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  submitted = false;
  user= {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({ // setvalue to set your whole form
    //   userdata: {
    //     username: suggestedName,
    //     email: '' 
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({ // patchvalue to overide parts of the form
      userdata: {
        username: suggestedName
      }
    })
  }
  // onSubmit(form: ElementRef) {
  onSubmit(form: NgForm) {
    // console.log('submitted');
    // console.log(form.value);
    // console.log(this.signupForm);
    this.user.username = this.signupForm.value.userdata.username;
    this.user.email = this.signupForm.value.userdata.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;

    // reset form 
    this.signupForm.reset();
  }
}
