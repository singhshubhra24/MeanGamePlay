import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import {ActivatedRoute, Router, ParamMap} from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private QuizService : QuizService,private route : ActivatedRoute,
    private router : Router) { }
    urlId : String;
    UserName : String;
    CorrectAns : String;
    IncorrectAns : String;
    Score : String

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.urlId = params.get("id")
    })
    let data = {
      id : this.urlId
    }
    this.QuizService.getResult(data).subscribe(res=>{
      console.log(res);
      if(res.length > 0){
        let data = res[0];
        this.UserName = data['name'];
        this.CorrectAns = data['correctAns'];
        this.IncorrectAns = data['incorrectAns'];
        this.Score = data['score'];
      }
    })
  }

  play(){
    let id = this.urlId;
    this.router.navigate(['./quiz',{id}]);
  }

  home(){
    this.router.navigate(['./']);
  }

}
