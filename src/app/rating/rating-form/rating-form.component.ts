import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']
})
export class RatingFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btnStarActive = {
    id: 0,
    active: true
  };

  public activeButton(rateId:number){


    this.btnStarActive = {
      id: rateId == this.btnStarActive.id ? 0 : rateId,
      active: this.btnStarActive.active && this.btnStarActive.id == rateId ? false : true
    }

    console.log(this.btnStarActive);

    //if the button is the same set id to 0 to deactivate


  }

  public setActiveClass(rateId:number):boolean{

    console.log("activating rateId: "+ rateId);

    if(this.btnStarActive.active && 
      this.btnStarActive.id == rateId
    ){
      console.log("true class");
      return true;
    }
    return false;
  }
}
