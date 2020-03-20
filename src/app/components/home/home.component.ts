import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
''
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgSrcArray=[];
  num=0;
  constructor() { }

  ngOnInit(): void {
    this.imgSrcArray.push("../../../assets/pictures/1.jpg","../../../assets/pictures/2.jpg","../../../assets/pictures/3.jpg");
    setInterval(() => {
      this.rightClick();
    }, 10000);
  }

  leftClick(){
    if(this.num==0){
      this.num=this.imgSrcArray.length-1;
    }
    else{
      this.num=this.num-1;
    }
  }

  rightClick(){
    if(this.num==this.imgSrcArray.length-1){
      this.num=0;
    }
    else{
      this.num=this.num+1;
    }
  }

}