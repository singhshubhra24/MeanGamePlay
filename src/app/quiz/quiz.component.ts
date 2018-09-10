import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  quesForm : any;

  ngOnInit() {
    this.quesForm = this.fb.group({
      'question': ['', Validators],
      'optionA': ['', Validators],
      'optionB' : ['',Validators],
      'optionC' : ['',Validators],
      'optionD' : ['',Validators],
      'correctAns' : ['',Validators]
    })
  }

  submit(data){
    console.log(data);
  }

  reset(data){

  }

  get question(){
    return this.quesForm.controls.question;
  }

  get optionA(){
    return this.quesForm.controls.optionA;
  }

  get optionB(){
    return this.quesForm.controls.optionB;
  }

  get optionC(){
    return this.quesForm.controls.optionC;
  }

  get optionD(){
    return this.quesForm.controls.optionD;
  }

  get correctAns(){
    return this.quesForm.controls.correctAns;
  }
}

