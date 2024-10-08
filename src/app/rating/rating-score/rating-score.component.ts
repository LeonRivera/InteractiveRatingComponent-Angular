import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rating-score',
  templateUrl: './rating-score.component.html',
  styleUrls: ['./rating-score.component.css']
})
export class RatingScoreComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  stars = 0;
  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      this.stars = params['stars']
    })
  }

}
