import { Component, OnInit } from '@angular/core';
import { Dungbeetle, DungbeetleService } from './../dungbeetle.service';
import { Dungball, DungballService } from './../dungball.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  dungbeetleService: DungbeetleService;
  loggedinbeetle: Dungbeetle = new Dungbeetle();

  dungballService: DungballService;
  dungball: Dungball = new Dungball();

  dungballs: Dungball[] = [];

  router: Router;

  constructor(private _router: Router, private _dungbeetleService: DungbeetleService, private _dungballService: DungballService) {

    this.dungbeetleService = _dungbeetleService;
    this.dungballService = _dungballService;
    this.router = _router;
    
    this.dungbeetleService.retrieveLoggedIn((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        this.loggedinbeetle = JSON.parse(data);
        this.dungball.owner_id = this.loggedinbeetle._id;
      }
    });

    this.dungballService.retrieveAll((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        for(let ball of data) {
          if(ball.owner_id == this.loggedinbeetle._id) {
            this.dungballs.push(ball);
          }
        }
      }
    });
  }

  ngOnInit() {
  }

}
