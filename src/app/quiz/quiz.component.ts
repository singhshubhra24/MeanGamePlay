import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from "@angular/forms";
import { QuizService } from '../quiz.service';
import {ActivatedRoute, Router, ParamMap} from "@angular/router";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  constructor(private fb: FormBuilder, private QuizService : QuizService,
    private route : ActivatedRoute,private router : Router) { }
  quesForm : any;
  dataArr : any;
  total : number = 0;
  CorrectAns : number = 0;
  IncorrectAns : number = 0;
  quesArr : any;
  urlId : String;

  ngOnInit() {
    this.quesForm = this.fb.group({
      'question': ['', Validators],
      'optionA': ['', Validators],
      'optionB' : ['',Validators],
      'optionC' : ['',Validators],
      'optionD' : ['',Validators],
      'correctAns' : ['',Validators]
    })

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.urlId = params.get("id")
    })

    this.getData();
  }

  getData(){
    this.QuizService.getQues().subscribe(res => {
      console.log(res);
      this.dataArr = res;
      this.total = res.length;
      this.quesArr = [];
      for(let i = 0;i<res.length;i++){
        let obj = {};
        obj['correctAns'] = 0;
        obj['IncorrectAns'] = 0;
        this.quesArr.push(obj);
      }
    })
  }

  onSelectionChange(data, value, index){
    debugger;
    //let customData = this.quesArr[index];
    console.log(this.quesArr);
    if(data.correctAns == value){
      this.quesArr[index]["correctAns"] = 1;
      this.quesArr[index]["IncorrectAns"] = 0;
    }
    else{
      this.quesArr[index]["correctAns"] = 0;
      this.quesArr[index]["IncorrectAns"] = 1;
    }
    console.log(this.quesArr);
    console.log(this.CorrectAns);
    console.log(this.IncorrectAns);
  }

  submit(){
    let data = this.quesArr;
    var correctVal = 0;
    let incorrectVal = 0;
    for(let i = 0;i<data.length;i++){
      correctVal += data[i]["correctAns"];
      incorrectVal += data[i]["IncorrectAns"];
    }

    let postData = {
      correctAns : correctVal,
      incorrectAns : incorrectVal,
      score : correctVal,
      _id : this.urlId,
    }
    debugger;
    this.QuizService.updateUser(postData).subscribe(res =>{
      let id = res.id;
      this.router.navigate(['./result',{id}]);
    })
  }

  home(){
    this.router.navigate(['./']);
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

