import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from "@angular/forms";
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private fb: FormBuilder,private QuizService : QuizService) { }
  quesForm : any;
  isShowSuccess: boolean = true;
  isMsgText : string;

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
    debugger;
    console.log(data);
    this.QuizService.saveQues(data).subscribe(res =>{
      console.log(res);
      this.showSuccessMessage('Saved');
    })
  }

  showSuccessMessage(value){
    window.scrollTo(500, 0);
    this.isShowSuccess = false;
    this.isMsgText = value;
    setTimeout(() => {
      this.isShowSuccess = true;
    }, 5000);
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
