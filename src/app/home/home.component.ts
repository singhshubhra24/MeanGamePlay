import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from "@angular/forms";
import { QuizService } from '../quiz.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder,private QuizService : QuizService,
    private route: ActivatedRoute,private router:Router) { }
  quizForm : any;

  ngOnInit() {
    this.quizForm = this.fb.group({
      'name': ['', Validators]
    })
  }

  submit(data){
    console.log(data);
    this.QuizService.saveUser(data).subscribe(res =>{
      debugger;
      //this.router.navigate(['./quiz/id', res.dataId]); 
      let id = res.dataId;
      this.router.navigate(['./quiz',{id}]);
    })
  }

  reset(data){

  }

  get name(){
    return this.quizForm.controls.name;
  }

}
